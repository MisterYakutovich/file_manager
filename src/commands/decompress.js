/**
 * command example:decompress C:\\Users\\user\\desktop\\compress_test.br C:\\Users\\user\\desktop\\
 */

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';


export async function decompressFile(inputFile, outputDir) {
  if (!fs.existsSync(inputFile)) {
    throw new Error(`Файл ${inputFile} не найден.`);
  }
  const outputFile = path.join(outputDir, path.basename(inputFile, '.br') + '.txt');
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  const brotli = zlib.createBrotliDecompress();

  try {
    await new Promise((resolve, reject) => {
      inputStream.pipe(brotli).pipe(outputStream).on('finish', resolve).on('error', reject);
    });

    console.log(`Файл ${inputFile} успешно распакован и сохранен в ${outputFile}`);
  } catch (err) {
    console.error(`Ошибка при распаковке файла ${inputFile}:`, err.message);
    throw err;
  }
}