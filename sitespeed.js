const { exec } = require('child_process');

exec(
  `webcoach https://sports.gstp.uat.skybet.net?siteId=develop -b firefox`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
