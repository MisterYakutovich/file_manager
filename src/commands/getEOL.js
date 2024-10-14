import os from 'os';

export async function getEOL() {
  console.log(`Default EOL: ${os.EOL}`);
}