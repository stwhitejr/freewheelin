import {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase';

const useTrips = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tripsCollection = collection(db, 'trip');
      const querySnapshot = await getDocs(tripsCollection);
      const documents = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setIsLoading(false);
      setTrips(documents);
    };

    fetchData();
  }, []);

  return {trips, isLoading};
};

export default useTrips;
