// 源端口号 目的地端口号
const net = require('net');
// 按照HTTP协议的报文格式来拼接


class Xmlhttprequest {
  constructor() {
    this.POST
  }
}
const client = net.createConnection({port:8088, host:'127.0.0.1'}, () => {
  let json = JSON.stringify({a:1});
  client.write('POST / HTTP/1.1\r\n');
  client.write('HOST:127.0.0.1\r\n');
  client.write('Content-Type: application/json\r\n');
  client.write('\r\n');
  client.write(json);
  client.write('\r\n');
})
client.on('data', (data) => {
  console.log('receive', data.toString());
})
client.on('end', () => {
  console.log('disconnect');
})