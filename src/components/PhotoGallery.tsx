import useGetPhotos from '../hooks/useGetPhotos';

export interface PhotoGalleryProps {}

const PhotoGallery = (props: PhotoGalleryProps) => {
  const {allPhotos, minPhotos} = useGetPhotos();
  return (
    <div>
      <h2>Photos</h2>
      {(allPhotos.length > 0 ? allPhotos : minPhotos).map((url) => (
        <img key={url} src={url} width="200px" />
      ))}
    </div>
  );
};

export default PhotoGallery;
