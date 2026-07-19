const fs = require('fs');
const path = require('path');
const bundle = require('./bundle');

const srcDir = path.join(__dirname, 'src');

console.log(`Watching for changes in: ${srcDir}...`);

let timeout = null;
fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
  if (filename) {
    // Debounce the bundling trigger to handle quick successive edits
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`\nChange detected in file: ${filename}`);
      bundle();
    }, 100);
  }
});

// Run initial bundling on startup
bundle();
