import NxWeiboOss from 'next-weibo-oss';

export default class {

  constructor(inLoader, inOptions) {
    //todo: do not new everytime:
    this.loader = inLoader;
    this.options = inOptions;
    this._oss = new NxWeiboOss(inOptions.token);
  }

  upload() {
    return new Promise(resolve => {
      this._oss.upload(this.loader.file).then(([response]) => {
        response.default = response.url;
        resolve(response);
      });
    })
  }

}
