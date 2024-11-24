import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </BrowserRouter>
  );
};

/*
  const [file, setFile] = useState<File | null>(null);
  const photo = useGetPhotos();
  const {upload, progress, fileUrl} = useUploadPhoto();
  const [data, setData] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'test'));
      const documents = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(documents);
    };

    fetchData();
  }, []);
<input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              {file && <button onClick={() => upload(file)}>Upload</button>}

              <p>Progress: {progress}%</p>
              {fileUrl && <img src={fileUrl} alt="Uploaded Image" />}*/

export default App;
