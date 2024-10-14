import fs from 'fs';

export async function rm(filePath) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
      } else {
        console.log(`File deleted: ${filePath}`);
      }
    });
  }