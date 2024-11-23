import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import useGetPhotos from "./useGetPhotos";
import useUploadPhoto from "./useUploadPhoto";

const App = () => {
  const [file, setFile] = useState(null)
  const photo = useGetPhotos();
  const {upload, progress, fileUrl} =   useUploadPhoto();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "test"));
      const documents = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(documents);
    };

    fetchData();
  }, []);



  console.log(data)
  console.log(photo)

  return <div>
    <div>
      <div>hello world</div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {file && (<button onClick={() => upload(file)}>Upload</button>)}

      <p>Progress: {progress}%</p>
      {fileUrl && <img src={fileUrl} alt="Uploaded Image" />}
    </div>
  </div>
}

export default App;
