import os from 'os';
export async function getArchitecture() {
    console.log(`Architecture: ${os.arch}`);
  }