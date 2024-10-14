import crypto from 'crypto';
import fs from 'fs';

export async function calculateHash(filePath) {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(filePath);

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    const hex = hash.digest('hex');
    console.log(`Hash of ${filePath}: ${hex}`);
  });
}