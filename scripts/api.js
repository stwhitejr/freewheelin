const {initializeApp} = require('firebase/app');
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  addDoc,
} = require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA6etn3ynRVa-bRD4KFBhd6BjuVbDDHaG0',
  authDomain: 'freewheelin-5ff80.firebaseapp.com',
  projectId: 'freewheelin-5ff80',
  storageBucket: 'freewheelin-5ff80.firebasestorage.app',
  messagingSenderId: '511685866642',
  appId: '1:511685866642:web:c7a47c9b28e5ed9977a24b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define the trip document reference
const tripDocRef = doc(db, 'trip', 'winter25');

// Add a new entry to the 'entries' subcollection
async function addEntry(entryData) {
  try {
    const entriesCollectionRef = collection(tripDocRef, 'entries');
    const newEntryRef = await addDoc(entriesCollectionRef, entryData);
    console.log('New entry added with ID:', newEntryRef.id);
  } catch (error) {
    console.error('Error adding entry:', error);
  }
}

// Modify an existing entry in the 'entries' subcollection
async function modifyEntry(entryId, updatedEntryData) {
  try {
    const entryDocRef = doc(tripDocRef, 'entries', entryId);
    // @ts-ignore
    await updateDoc(entryDocRef, updatedEntryData);
    console.log('Entry modified successfully.');
  } catch (error) {
    console.error('Error modifying entry:', error);
  }
}

// Example usage:

addEntry({
  name: 'entry 1',
  totalTravelTime: 1,
  activities: [],
  stayed: {
    name: 'location',
    photoUrl: '',
  },
  food: [],
  date: 0,
  description: 'Visited the snow-capped mountains.',
  photoUrl: 'https://example.com/mountain-image.jpg',
});

// const entryToUpdate = {
//   date: '2024-01-10',
//   description: 'Updated description: Had a great time skiing!',
// };

// modifyEntry('entryId', entryToUpdate);
