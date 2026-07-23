const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

// Read and parse vercel.json for redirects and rewrites
let vercelConfig = { redirects: [], rewrites: [] };
try {
  const vercelJsonPath = path.join(PUBLIC_DIR, 'vercel.json');
  if (fs.existsSync(vercelJsonPath)) {
    vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
  }
} catch (err) {
  console.error('Error reading vercel.json:', err);
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jsx': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // 1. Handle Redirects
  if (vercelConfig.redirects) {
    for (const redir of vercelConfig.redirects) {
      if (urlPath === redir.source) {
        res.writeHead(redir.permanent ? 301 : 302, { 'Location': redir.destination });
        res.end();
        return;
      }
    }
  }

  // 2. Handle Rewrites
  let resolvedPath = urlPath;
  if (vercelConfig.rewrites) {
    for (const rewrite of vercelConfig.rewrites) {
      if (urlPath === rewrite.source) {
        resolvedPath = rewrite.destination;
        break;
      }
    }
  }

  // 3. Serve Static File
  let filePath = path.join(PUBLIC_DIR, resolvedPath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (htmlErr, htmlStats) => {
        if (htmlErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }
        serveFile(filePath, res);
      });
    } else {
      serveFile(filePath, res);
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  Pocket Dragon local server running at:`);
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/17july2026-manual/`);
  console.log(`  http://localhost:${PORT}/17july2026-scoreboard/`);
  console.log(`  http://localhost:${PORT}/17july2026-gameplay/`);
  console.log(`==================================================\n`);
});
