import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
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

  return <div>hello world</div>
}

export default App;
