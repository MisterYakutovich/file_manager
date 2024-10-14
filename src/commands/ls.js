import fs from 'fs';
import path from 'path';

export const ls = () => {
  const files = fs.readdirSync(process.cwd());
  const dirs = files.filter(file => fs.lstatSync(path.join(process.cwd(), file)).isDirectory());
  const filesSorted = files.filter(file => !fs.lstatSync(path.join(process.cwd(), file)).isDirectory()).sort();

  console.log("--------------------");
  console.log("Папки:");
  dirs.sort().forEach(dir => console.log(`- ${dir}`));
  console.log("Файлы:");
  filesSorted.forEach(file => console.log(`- ${file}`));
  console.log("--------------------");
};
