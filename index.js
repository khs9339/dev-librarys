#!/usr/bin/env node

const readline = require('readline');
const modules = require('./modules');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const intro = `
실행할 명령을 입력해주세요;
 - nvm : nvm 설치 및 환경설정을 도와줍니다.(mac에서만 사용 가능)
`;

const answerCallback = (answer) => {
    modules.nvm();
    console.log('감사합니다!', answer);
    rl.close();
};

rl.question(intro, answerCallback);