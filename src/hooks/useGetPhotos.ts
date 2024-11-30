import {useEffect, useState} from 'react';
import {getStorage, ref, getDownloadURL, listAll} from 'firebase/storage';
import {useParams} from 'react-router-dom';

const useGetPhotos = () => {
  const {tripId, entryId} = useParams();
  const [minPhotos, setMinPhotos] = useState<string[]>([]);
  const [allPhotos, setAllPhotos] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const storage = getStorage();
      const storageRef = ref(storage, `trips/${tripId}/${entryId}`);

      // Create an array to store the download URLs
      const downloadUrls = [];

      // Define the maximum number of concurrent requests
      const maxConcurrentRequests = 5;
      const minAmount = 5;
      let hasLoadedTheMinum = false;

      // Function to fetch download URLs with throttling
      async function fetchDownloadUrls(files) {
        let pendingRequests = 0;
        const promises = files.map((file, index) => {
          return new Promise((resolve, reject) => {
            // Wait for a slot to become available
            const waitForSlot = () => {
              if (pendingRequests < maxConcurrentRequests) {
                pendingRequests++;
                getDownloadURL(file)
                  .then((url) => {
                    downloadUrls.push(url);
                    if (
                      !hasLoadedTheMinum &&
                      downloadUrls.length === minAmount
                    ) {
                      setMinPhotos(downloadUrls);
                      hasLoadedTheMinum = true;
                    }
                    pendingRequests--;
                    resolve(true);
                  })
                  .catch((error) => {
                    pendingRequests--;
                    reject(error);
                  });
              } else {
                setTimeout(waitForSlot, 200); // Wait for a short period before retrying
              }
            };
            waitForSlot();
          });
        });

        // Wait for all promises to resolve
        await Promise.all(promises).then(() => {
          hasLoadedTheMinum = true;
          setAllPhotos(downloadUrls);
        });
      }

      // List all files in the folder
      listAll(storageRef)
        .then((res) => {
          // Get the list of files
          const files = res.items;

          // Fetch download URLs with throttling
          fetchDownloadUrls(files).catch((error) => {
            // Handle any errors
            console.error(error);
          });
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    })();
  }, [tripId, entryId]);

  return {allPhotos, minPhotos};
};

export default useGetPhotos;
