import { base } from "./base.conf";

exports.config = {
    ...base,
    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--incognito']
        },
        acceptInsecureCerts: true
    }],
    services: ['chromedriver'],
}