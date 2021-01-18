export interface ProxyObj {
    url?: string
    username?: string;
    password?: string;
    ip?: string;
    port?: string;
    scheme?: string;
}
export class Proxy {
    private username?: string;

    private password?: string;

    private ip?: string;

    private port?: string;

    private scheme?: string;

    constructor (proxyObj: ProxyObj) {
      if (proxyObj.url !== undefined && proxyObj.url !== null) {
        const proxySplit = proxyObj.url.split(':')
        if (proxyObj.url.includes('@')) {
          if (proxySplit.length < 3) {
            throw new Error(`Proxy url is wrong. ${proxyObj.url}`)
          }
          [this.username, this.password] = proxyObj.url
            .split('@')[0]
            .replace('http://', '')
            .replace('https://', '')
            .split(':');
          [this.ip, this.port] = proxyObj.url
            .split('@')[1]
            .replace('http://', '')
            .replace('https://', '')
            .split(':')
        } else {
          if (proxySplit.length < 2) {
            throw new Error(`Proxy url is wrong. ${proxyObj.url}`)
          }
          if (proxySplit.length >= 4) {
            [this.ip, this.port, this.username, this.password] = proxyObj.url
              .replace('http://', '')
              .replace('https://', '')
              .split(':')
          } else {
            [this.ip, this.port] = proxyObj.url
              .replace('http://', '')
              .replace('https://', '')
              .split(':')
          }
        }
        if (proxyObj.url.startsWith('https://')) {
          this.scheme = 'https'
        } else {
          this.scheme = 'http'
        }
      } else {
        if (proxyObj.scheme === null || proxyObj.scheme === undefined) {
          this.scheme = 'http'
        } else {
          this.scheme = proxyObj.scheme
        }
        this.ip = proxyObj.ip
        this.port = proxyObj.port
        this.username = proxyObj.username
        this.password = proxyObj.password
      }
    }

    getIp () {
      return this.ip
    }

    getPort () {
      return this.port
    }

    getUsername () {
      return this.username
    }

    getPassword () {
      return this.password
    }

    getSheme () {
      return this.scheme
    }

    getProxy () {
      if (this.username !== null && this.username !== undefined) {
        return `${this.scheme}://${this.username}:${this.password}@${this.ip}:${this.port}`
      }
      return `${this.scheme}://${this.ip}:${this.port}`
    }
}
