import chalk from 'chalk';

const ora = require('ora');

interface LastMsg {
    symbol: string,
    text: string
}

const spinner = ora();
let lastMsg: LastMsg | null;
let isPaused = false;

export function logWithSpinner(msg: string, successMsg: string = '', symbol: string = chalk.green('✔')): void {
  if (lastMsg) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  }
  spinner.text = msg;
  lastMsg = {
    symbol,
    text: successMsg || msg,
  };
  spinner.start();
}

export function stopSpinner(persist?: boolean): void {
  if (lastMsg && persist) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  } else {
    spinner.stop();
  }
  lastMsg = null;
}

export function pauseSpinner(): void {
  if (spinner.isSpinning) {
    spinner.stop();
    isPaused = true;
  }
}

export function resumeSpinner(): void {
  if (isPaused) {
    spinner.start();
    isPaused = false;
  }
}

export function failSpinner(text: string): void {
  spinner.fail(text);
}
