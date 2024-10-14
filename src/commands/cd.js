
export const cd = (targetDir) => {
    try {
      process.chdir(targetDir);
      console.log(`Current directory changed to: ${process.cwd()}`);
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  };