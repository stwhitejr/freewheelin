import { useCallback, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const useUploadPhoto = () => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setDownloadURL] = useState<string | null>(null);

  return {
    upload: useCallback((file: File) => {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
        },
        (error) => {
          console.error('Error uploading file:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url);
          });
        }
      );
    }, []),
    fileUrl,
    progress
  }
}

export default useUploadPhoto;
