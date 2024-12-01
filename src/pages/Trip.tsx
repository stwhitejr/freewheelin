import Nav from 'components/Nav';
import {db} from '../firebase';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import {createContext, useEffect, useState} from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import Intro from 'components/Intro';
import Entries from 'components/Entries';
import Entry from './Entry';
import PhotoGallery from 'components/PhotoGallery';

export interface TripProps {}

interface Entry {
  id: string;
  name: string;
  description: string;
  photo: string;
}
interface Trip {
  id: string;
  name: string;
  description: string;
  photo: string;
}

interface TripContextValue {
  entries: Entry[];
  isLoading: boolean;
  trip: Trip;
}
export const TripContext = createContext<TripContextValue>({
  entries: [],
  isLoading: false,
  // @ts-ignore
  trip: {},
});

const TripComponent = (props: TripProps) => {
  const {tripId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [trip, setTrip] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tripsCollection = collection(db, 'trip');
      const snap = await getDoc(doc(tripsCollection, tripId));
      const _trip = snap.data();

      setTrip(_trip);

      const snap2 = await getDocs(
        collection(tripsCollection, tripId, 'entries')
      );

      const entries = snap2.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEntries(entries);
      setIsLoading(false);
    };

    fetchData();
  }, [tripId]);

  return (
    <TripContext.Provider value={{isLoading, entries, trip}}>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <Nav />
          {entries.length > 0 && (
            <Routes>
              <Route path="entry/:entryId" element={<Entry />} />
              <Route
                path="*"
                element={
                  <>
                    <Intro title={trip.name} description={trip.description} />
                    <Entries />
                  </>
                }
              />
            </Routes>
          )}
          <PhotoGallery />
        </>
      )}
    </TripContext.Provider>
  );
};

export default TripComponent;
