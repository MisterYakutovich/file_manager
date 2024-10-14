import fs from 'fs';
import path from 'path';

export function cp(srcPath, destPath) {
   
    const fileName = srcPath.split('/').pop(); 
    const fullDestPath = path.join(destPath, fileName); 
  
    const readStream = fs.createReadStream(srcPath);
    const writeStream = fs.createWriteStream(fullDestPath);
  
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
      console.log(`File copied: ${srcPath} -> ${fullDestPath}`);
    });
  }
  