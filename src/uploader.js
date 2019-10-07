const fs = require('fs');
const { bucket } = require('../config/firebase/bucket');
const Logger = require('./logger');

exports.upload = (imageFile, name) => new Promise((resolve, reject) => {
  try {
    const file = bucket.file(name);
    fs.createReadStream(`${__dirname}/img/${imageFile}`)
      .pipe(file.createWriteStream())
      .on('error', (err) => {
        Logger.error('error while uploading file', err);
        reject(err);
      })
      .on('finish', () => {
        Logger.info('Successfully uploaded file');
        resolve();
      });
  } catch (err) {
    Logger.error('Image could not be uploaded to firebase', err);
    reject(err);
  }
});
