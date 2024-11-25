import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Upload from './pages/Upload';
// import {useEffect} from 'react';
// import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
// import {db} from './firebase';

const App = () => {
  // useEffect(() => {
    // const fetchData = async () => {
      // Basic collection example - nothing about sub collections are returned
      // const tripsCollection = collection(db, 'trip');
      // const querySnapshot = await getDocs(tripsCollection);
      // const documents = querySnapshot.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }));

      // Accessing doc directly with known id
      // const tripEntry = doc(tripsCollection, 'Aeg9FaOHdKJFfPawFVnO');
      // const snap = await getDoc(tripEntry);
      // console.log(snap.data());

      // Subcollection example
      // const entriesCollection = collection(
      //   tripsCollection,
      //   documents[0].id,
      //   'entries'
      // );

      // const query2 = await getDocs(entriesCollection);

      // const entries = query2.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }));

      // resolving ref example
      // const refSnapsot = await getDoc(documents[0].entries[0]);
      // console.log('ref', refSnapsot.data());
  //   };

  //   fetchData();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
