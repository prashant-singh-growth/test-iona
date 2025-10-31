const { execSync } = require('child_process');
const fs = require('fs');

// Log function to track build process
function log(message) {
  console.log(`[Vercel Build] ${message}`);
}

// Run a command and log the output
function run(command) {
  log(`Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    log(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Ensure the src directory exists
if (!fs.existsSync('./src')) {
  log('src directory not found!');
  process.exit(1);
}

// Check if index.css exists
if (!fs.existsSync('./src/index.css')) {
  log('src/index.css not found!');
  process.exit(1);
}

// Main build process
log('Starting build process');

// Build React app
log('Building React application...');
run('react-scripts build');

log('Build completed successfully'); 