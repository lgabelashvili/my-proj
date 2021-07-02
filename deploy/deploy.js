/* eslint-disable */
const Client = require('ssh2-sftp-client');
const cliProgress = require('cli-progress');
const utils = require('./deployUtils');

const sftp = new Client();
const path = require('path');

const src = path.join(__dirname, '..', 'build/');
const remote = '/var/www/verylinx.com';
const total = utils.getTotalSize(`${src}`);

const progress = new cliProgress.Bar({
  format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed} kbit',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: false,
});

sftp.connect({
  host:'66.29.131.57',
  port: 22,
  username: 'root',
  password: 'W2taLk2Fi0Nd0Ej75X',
}).then(() =>
// console.log('\x1b[32m',"connect",'\x1b[37m')
// console.log('\x1b[32m',"start upload",'\x1b[37m')

  sftp.uploadDir(src, remote)).then((data) => {
  sftp.end().then((r) => {
    console.log('\x1b[32m', '\nupload successful', '\x1b[37m');
    progress.stop();
  });
}).catch((err) => {
  console.log(err, 'catch error');
});
let sum = 0;
sftp.on('upload', (info) => {
  sum += utils.getFileSize(info.source);
  progress.update(Math.round(parseFloat(((utils.getMb(sum) / total) * 100))), {
    speed: '125',
  });
});

progress.start(100, 0, {
  speed: 'N/A',
});
