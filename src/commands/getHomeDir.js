import os from 'os';
export async function getHomeDir() {
    console.log(`Home directory: ${os.homedir()}`);
  }