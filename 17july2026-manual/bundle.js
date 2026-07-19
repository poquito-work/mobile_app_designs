const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'pocket-dragon-ref.jsx');

const files = [
  'ios-frame.jsx',
  'poquito-ui.jsx',
  'poquito-screens.jsx',
  'poquito-home.jsx',
  'pocket-dragon-extra.jsx',
  'pocket-dragon-app.jsx'
];

function bundle() {
  console.log('Bundling pocket-dragon-ref.jsx...');
  try {
    let bundledContent = '/* ===== BUNDLED POCKET DRAGON REF ===== */\n\n';
    
    for (const file of files) {
      const filePath = path.join(srcDir, file);
      if (!fs.existsSync(filePath)) {
        console.error(`Error: Source file not found: ${filePath}`);
        return false;
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      bundledContent += `// Start of File: ${file}\n`;
      bundledContent += fileContent;
      bundledContent += `\n// End of File: ${file}\n\n`;
    }
    
    fs.writeFileSync(outputFile, bundledContent, 'utf8');
    console.log(`Success! Bundled file written to: ${outputFile}`);
    return true;
  } catch (err) {
    console.error('Error bundling files:', err);
    return false;
  }
}

if (require.main === module) {
  bundle();
}

module.exports = bundle;
