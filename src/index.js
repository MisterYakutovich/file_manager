import os from "os";
import path from "path";
import { createInterface } from "readline";
import { cd } from "./commands/cd.js";
import {up} from "./commands/up.js"
import { ls } from "./commands/ls.js";
import {cat} from "./commands/cat.js";
import {add} from "./commands/add.js";
import {rn} from "./commands/rn.js";
import {cp} from "./commands/cp.js";
import {mv} from "./commands/mv.js";
import {rm} from "./commands/rm.js";
import { getEOL } from "./commands/getEOL.js";
import { getCpus } from "./commands/getCpus.js";
import { getHomeDir } from "./commands/getHomeDir.js";
import { getUsername } from "./commands/getUserName.js";
import { getArchitecture } from "./commands/getArchitecture.js";

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
    } else if (command.startsWith('cat ')) {
      const filePath = command.slice(4);
      cat(filePath);
    } else if (command.startsWith("add")){
      const fileName = command.slice(4);
      add(fileName);
    }else  if (command.startsWith('rn ')) {
      const [oldPath, newPath] = command.slice(3).split(' ');
      rn(oldPath, newPath);
    }else if (command.startsWith('cp ')) {
      const [srcPath, destPath] = command.slice(3).split(' ');
      cp(srcPath, destPath);
    }else  if (command.startsWith('mv ')) {
      const [srcPath, destPath] = command.slice(3).split(' ');
      mv(srcPath, destPath);
    }else if (command.startsWith('rm ')) {
      const filePath = command.slice(3);
      rm(filePath);
    }else  if (command.startsWith('os --EOL')) {
      getEOL();
    }else if (command.startsWith('os --cpus')) {
      getCpus();
    }else if (command.startsWith('os --homedir')) {
      getHomeDir();
    }else if (command.startsWith('os --username')) {
      getUsername();
    }else if (command.startsWith('os --architecture')) {
      getArchitecture();
    } 
    else {
      console.log("Неверная команда.");
    }
    rl.setPrompt(`\x1b[32m ${process.cwd()}>\x1b[0m`);
    rl.prompt();
  });
  
process.on('exit', function (code) {
    return console.log(`Thank you for using File Manager, ${username}, goodbye! ${code}`);
});