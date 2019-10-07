require('dotenv').config();
const Logger = require('./logger');
const { upload } = require('./uploader');

async function start() {
  Logger.info('======= started =======');
  await upload('sansa.jpg', 'sansa.jpg');
  Logger.info('****** finished *******');
}
start();
