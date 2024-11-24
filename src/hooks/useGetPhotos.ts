import  { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const useGetPhotos = () => {
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

   useEffect( () => {
    (async () => {
      const storage = getStorage();
      const storageRef = ref(storage, 'IMG_4007.PNG');

      try {
        const url = await getDownloadURL(storageRef);
        setDownloadURL(url);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    })()

  }, []);

  return downloadURL
};

export default useGetPhotos;
