export interface PhotoGalleryProps {}

/**
 * TODO
 * store photos like so
 * tripId -> entryId -> photos[]
 * photoMetadata {
 *  activityName: '' | null,
 *  etc
 * }
 *
 * this way i can use the cursor/pagination approach to call all the photos of an entry
 * then when i click on an activity,etc i can filter all the photos ive loaded by the metadata
 * each Data structure will have a direct photo url for the clickable card
 */

/*
  const photo = useGetPhotos();
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
*/


const PhotoGallery = (props: PhotoGalleryProps) => {
  return <div>foobar</div>;
};

export default PhotoGallery;
