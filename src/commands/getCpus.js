import os from 'os';

export async function getCpus() {
    const cpus = os.cpus();
    console.log('CPUs:');
    cpus.forEach((cpu, index) => {
      console.log(`  CPU ${index + 1}:`);
      console.log(`    Model: ${cpu.model}`);
      console.log(`    Speed: ${cpu.speed} GHz`);
    });
  }