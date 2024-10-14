import fs from 'fs';

export function cat(filePath) {
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
  fileStream.on('error', (err) => {
    console.error(`Error reading file: ${err}`);
  });
}