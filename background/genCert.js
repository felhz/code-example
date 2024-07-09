/**
 *
 * @description 生成证书
 */
const fs = require('fs');
const selfsigned = require('selfsigned');

const attrs = [{ name: 'commonName', value: 'static.com' }];
const pems = selfsigned.generate(attrs, { days: 365 });

fs.existsSync('gen') || fs.mkdirSync('gen');
fs.writeFileSync('gen/private.key', pems.private);
fs.writeFileSync('gen/public.key', pems.public);
fs.writeFileSync('gen/cert.key', pems.cert);
