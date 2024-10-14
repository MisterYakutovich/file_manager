import fs from 'fs';

export async function add(newFileName) {
    try {
      await fs.promises.writeFile(newFileName, '');
      console.log(`Файл ${newFileName} успешно создан`);
    } catch (err) {
      console.error(`Ошибка при создании файла: ${err}`);
    }
  }