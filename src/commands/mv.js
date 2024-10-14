import fs from 'fs';
import path from 'path';

export async function mv(srcPath, destDir) {
  const fileName = path.basename(srcPath);
  const destPath = path.join(destDir, fileName);

  const readStream = fs.createReadStream(srcPath);
  const writeStream = fs.createWriteStream(destPath);

  readStream.on('data', (chunk) => {
    writeStream.write(chunk);
  });

  readStream.on('error', (err) => {
    console.error(`Error reading file: ${err}`);
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing file: ${err}`);
  });

  writeStream.on('finish', () => {
    fs.unlink(srcPath, (err) => {
      if (err) {
        console.error(`Error deleting original file: ${err}`);
      } else {
        console.log(`File moved: ${srcPath} -> ${destPath}`);
      }
    });
  });
}