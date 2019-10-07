const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: `${__dirname}/keyfile.json`,
});

exports.bucket = storage.bucket(process.env.FIREBASE_BUCKET);
