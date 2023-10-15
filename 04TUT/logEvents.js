const {format} = require('data-fns');
const {v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\thh:mm:ss'));

console.log.apply(uuid())