Usage:<br>
const proxy = new Proxy({url: 'http://username:password@569.269.466.236:8080'})<br>
OR<br>
const proxy = new Proxy({ip: '569.269.466.236', port: '8080', username: 'username', password: 'password'})<br>
OR<br>
const proxy = new Proxy({ip: '569.269.466.236', port: '8080'})<br>
OR<br>
const proxy = new Proxy({scheme: 'http', ip: '569.269.466.236', port: '8080'})<br>
<br>
Then<br>
<br>
proxy.getIp();<br>
proxy.getPort();<br>
proxy.getUsername();<br>
proxy.getPassword();<br>
proxy.getProxy(); // returns proxy in url format http://username:password@569.269.466.236:8080 OR http://569.269.466.236:8080