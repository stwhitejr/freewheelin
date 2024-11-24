export interface PhotoGalleryProps {}

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
