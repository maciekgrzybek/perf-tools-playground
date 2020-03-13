const { exec } = require('child_process');

const mainUrl = 'https://sports.gstp.uat.skybet.net';

const pages = [
  mainUrl,
  `${mainUrl}/166661`,
  `${mainUrl}/166661/10220390`,
  `${mainUrl}/166661/10220390/11623979`,
];

const urls = pages.reduce((acc, url) => {
  acc = `${acc},${url}?siteId=develop`;
  return acc;
});

exec(`lighthouse-batch -s ${urls} -h`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
