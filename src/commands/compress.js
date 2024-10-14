/**
 * command example:compress C:\\Users\\user\\desktop\\file.txt C:\\Users\\user\\desktop\\file.br
 */
import fs from 'fs';
import zlib from 'zlib';

export function compressFile(inputFile, outputFile) {
   
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  const br = zlib.createBrotliCompress();

  inputStream.pipe(br).pipe(outputStream).on('finish', () => {
    console.log(`Файл ${inputFile} успешно сжат и сохранен в ${outputFile}`);
  });
}
