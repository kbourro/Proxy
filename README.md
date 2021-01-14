Usage:
const proxy = new Proxy({url: 'http://username:password@569.269.466.236:8080'})
OR
const proxy = new Proxy({ip: '569.269.466.236', port: '8080', username: 'username', password: 'password'})
OR
const proxy = new Proxy({ip: '569.269.466.236', port: '8080'})
OR
const proxy = new Proxy({scheme: 'http', ip: '569.269.466.236', port: '8080'})

Then

proxy.getIp();
proxy.getPort();
proxy.getUsername();
proxy.getPassword();
proxy.getProxy(); // returns proxy in url format http://username:password@569.269.466.236:8080 OR http://569.269.466.236:8080