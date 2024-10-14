import os from 'os';
export async function getUsername() {
    console.log(`Current username: ${os.userInfo().username}`);
  }