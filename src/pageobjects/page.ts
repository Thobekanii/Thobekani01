import { base } from "../configs/base.conf";

// export default class Page {
//     /**
//      * navigate to a website
//      */
//     public async open(): Promise<string> {
//         return browser.url(base.baseUrl);
//     }
// }

class Page {
    /**
          * navigate to a website
          */
    public async open(): Promise<string> {
        return browser.url(base.baseUrl);
    }
}
export default new Page