const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const ReportGenerator = require("lighthouse/lighthouse-core/report/report-generator");
const fs = require("fs");

function main(url, options, config = null) {
  return new Promise((resolve, reject) => {
    return chromeLauncher
      .launch({ chromeFlags: options.chromeFlags })
      .then(chrome => {
        options.port = chrome.port;
        return lighthouse(url, options, config).then(results => {
          resolve();
          return chrome
            .kill()
            .then(() => ReportGenerator.generateReportHtml(results.lhr));
        });
      });
  });
}

const options = {
  chromeFlags: ["--show-paint-rects"]
};

const mainUrl = "https://sports.gstp.uat.skybet.net";

const pages = {
  home: mainUrl,
  sport: `${mainUrl}/166661`,
  competition: `${mainUrl}/166661/10220390`,
  event: `${mainUrl}/166661/10220390/11623979`
};

main(`${pages["home"]}?siteId=develop`, options).then(report => {
  fs.writeFileSync(`reports/lighthouse/home.html`, report);
});
