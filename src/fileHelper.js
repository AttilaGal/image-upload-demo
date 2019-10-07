const fs = require('fs');
const Logger = require('./logger');

exports.remove = (path) => new Promise((resolve, reject) => {
  fs.unlink(path, (err) => {
    if (err) {
      reject(err);
    }
    resolve();
  });
});


exports.read = (path) => new Promise((resolve) => {
  fs.readFile(path, (err, content) => {
    if (err) {
      Logger.error(`failed to read ${path}`);
      resolve(null);
    }
    resolve(content);
  });
});

exports.write = (path, content, encoding) => new Promise((resolve, reject) => {
  try {
    const file = fs.openSync(path, 'w+');
    Logger.info(file);
    fs.write(file, content, encoding, (err) => {
      if (err) {
        Logger.error(err);
        reject(err);
      }
      Logger.info('File has been saved');
      resolve(true);
    });
  } catch (err) {
    Logger.error('unable to create file', err);
    reject(err);
  }
});
