import path from 'path';

export const up = () => {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);
  
  if (parentDir !== currentDir) {
    process.chdir(parentDir);
    
  }
};