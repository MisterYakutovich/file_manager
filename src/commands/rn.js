import fs from 'fs';

export function rn(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file: ${err}`);
    } else {
      console.log(`File renamed: ${oldPath} -> ${newPath}`);
    }
  });
}