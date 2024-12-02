const {initializeApp} = require('firebase-admin/app');
const {getStorage} = require('firebase-admin/storage');
const {promisify} = require('util');
const admin = require('firebase-admin');
const fs = require('fs');
const util = require('util');
const sizeOf = require('image-size');

const promisifyFs = util.promisify;

// Replace with your Firebase project credentials
const serviceAccount = require('./firebaseServiceKey.json');

// Initialize Firebase Admin SDK
initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'freewheelin-5ff80.firebasestorage.app',
});

const bucket = getStorage().bucket();
const readdir = promisifyFs(fs.readdir);
const stat = promisifyFs(fs.stat);

async function syncDirectory(localDirectoryPath, storagePath) {
  try {
    const filesAndFolders = await readdir(localDirectoryPath);

    for (const item of filesAndFolders) {
      const fullPath = `${localDirectoryPath}/${item}`;
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        // Recursively sync subdirectories
        await syncDirectory(fullPath, `${storagePath}/${item}`);
      } else {
        // Upload file to Firebase Storage
        const file = bucket.file(`${storagePath}/${item}`);
        const stream = fs.createReadStream(fullPath);

        // Get image dimensions if it's an image
        if (
          item.endsWith('.jpg') ||
          item.endsWith('.jpeg') ||
          item.endsWith('.png')
        ) {
          await sizeOf(fullPath, async function (err, dimensions) {
            console.log(dimensions.width, dimensions.height);

            // Upload with metadata
            await file.save(stream, {
              metadata: {
                width: dimensions.width,
                height: dimensions.height,
              },
            });

            console.log(`Uploaded ${item} with dimensions`);
          });
        } else {
          // Upload without metadata
          await file.save(stream);
          console.log(`Uploaded ${item}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error syncing directory: ${error}`);
  }
}

const localDirectory = './media/storage';
const storagePath = 'test';

syncDirectory(localDirectory, storagePath)
  .then(() => {
    console.log('Directory synced successfully!');
  })
  .catch((error) => {
    console.error('Error syncing directory:', error);
  });
