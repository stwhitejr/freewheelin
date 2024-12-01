import {useContext, useMemo, useState} from 'react';
import useGetPhotos from '../hooks/useGetPhotos';
import {MasonryPhotoAlbum} from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {AppContext} from 'App';

export interface PhotoGalleryProps {}

const PhotoGallery = (props: PhotoGalleryProps) => {
  const {isMobile} = useContext(AppContext);
  const {allPhotos, minPhotos} = useGetPhotos();
  const [index, setIndex] = useState(-1);

  const photos = useMemo(() => {
    return (allPhotos.length > 0 ? allPhotos : minPhotos).map(
      (photo, index) => {
        const mod = index % 4;
        return {
          src: photo,
          height: mod === 1 ? 720 : mod === 2 ? 1440 : mod === 3 ? 810 : 160,
          width: 1080,
        };
      }
    );
  }, [allPhotos, minPhotos]);
  return (
    <div style={{padding: isMobile ? '10px' : 0}}>
      <MasonryPhotoAlbum
        spacing={10}
        photos={photos}
        columns={isMobile ? 1 : 4}
        onClick={({index}) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default PhotoGallery;
