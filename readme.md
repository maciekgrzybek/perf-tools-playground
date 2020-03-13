## Playground for performance tools - [Lighthouse](https://github.com/GoogleChrome/lighthouse) and [SiteSpeed](https://www.sitespeed.io/)

### Lighthouse
To run the test against home page run:
```shell script
npm run lh
```
To run the test against home, sport, competition and events pages, run:
```shell script
npm run lh:batch
```

### SiteSpeed.io
To run the test against home page run:
```shell script
npm run sitespeed
```

To run test against UAT and see the Grafana dashboard:
 - Run: `docker-compose up -d` (make sure you run the latest Docker compose version)
 - Run sitespeed to get some metrics: `docker-compose run https://sports.gstp.uat.skybet.net?siteId=develop https://www.sitespeed.io/ --graphite.host=graphite`
 - Access the dashboard: http://127.0.0.1:3000