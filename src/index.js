import os from "os";
import path from "path";
import { createInterface } from "readline";
import { cd } from "./commands/cd.js";
import {up} from "./commands/up.js"
import { ls } from "./commands/ls.js";

const args = process.argv.slice(2);
const username = args.find(arg => arg.startsWith('--username='))?.split('=')[1] || 'default';
console.log(`Welcome to the File Manager, ${username}!`);
process.chdir(os.homedir());
console.log(`You are currently in ${process.cwd()}`)
console.log(`Current working directory: ${path.resolve()}`);

let rl = createInterface(process.stdin, process.stdout);
rl.setPrompt(`\x1b[32m ${process.cwd()}>\x1b[0m`);
rl.prompt();

rl.on('line', (input) => {
    const command = input.trim();
    if (command === 'up') {
        up()
    } else if (command.startsWith('cd ')) {
      const targetDir = command.slice(3);
     cd(targetDir)
    } else if (command === 'ls') {
        ls()
    } else {
      console.log("Неверная команда.");
    }
    rl.setPrompt(`\x1b[32m ${process.cwd()}>\x1b[0m`);
    rl.prompt();
  });
  
process.on('exit', function (code) {
    return console.log(`Thank you for using File Manager, ${username}, goodbye! ${code}`);
});