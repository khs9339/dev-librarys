const { promisify } = require("util");
const { exec, spawn, execSync } = require("child_process");
// const exec = promisify(require("child_process").exec);
/** 
 * NVM 설치 
*/
const nvm = () => {
    try {
        const stdout = execSync('pwd').toString().trim();
        console.log('stdout:', stdout);
    } catch(e) {
        console.log(e)
    }
    
    // console.error('stderr:', stderr);
    // promisify()
}
module.exports = nvm;