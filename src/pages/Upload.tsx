import {useState} from 'react';
import useUploadPhoto from 'hooks/useUploadPhoto';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const {upload, progress, fileUrl} = useUploadPhoto();
  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      {file && <button onClick={() => upload(file)}>Upload</button>}

      <p>Progress: {progress}%</p>
      {fileUrl && <img src={fileUrl} alt="Uploaded Image" />}
    </div>
  );
};

export default Upload;
