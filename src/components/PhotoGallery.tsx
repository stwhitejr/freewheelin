import {useContext, useMemo, useState} from 'react';
import useGetPhotos from '../hooks/useGetPhotos';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {AppContext} from 'App';
import Banner from './Banner';
import BannerLayer from './BannerLayer';

export interface PhotoGalleryProps {}

const PhotoGallery = (props: PhotoGalleryProps) => {
  const {isMobile} = useContext(AppContext);
  const {allPhotos, minPhotos} = useGetPhotos();
  const [index, setIndex] = useState(-1);

  const {photoGroups, photos} = useMemo(() => {
    const groupSize = isMobile ? 1 : 2;
    const photos = (allPhotos.length > 0 ? allPhotos : minPhotos).map(
      (photo, index) => {
        return {
          src: photo,
          originalIndex: index,
        };
      }
    );

    return {
      photos,
      photoGroups: photos.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / groupSize);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []),
    };
  }, [allPhotos, minPhotos, isMobile]);

  return (
    <div style={{background: 'black'}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',

          flexWrap: 'wrap',
        }}
      >
        {photoGroups.map((photos) => {
          return (
            <Banner key={photos[0].src}>
              {photos.map((photo, index) => {
                const isOdd = index % 2 === 1;
                return (
                  <BannerLayer
                    key={photo.src}
                    onClick={() => setIndex(photo.originalIndex)}
                    image={{
                      desktop: photo.src,
                    }}
                    speed={Math.floor(Math.random() * (30 - -30 + 1) + -30)}
                    style={{
                      cursor: 'pointer',
                      ...(isMobile
                        ? {}
                        : {
                            left: 0,
                            [isOdd ? 'marginLeft' : 'marginRight']: 'auto',
                            width: '50%',
                          }),
                    }}
                  />
                );
              })}
            </Banner>
          );
        })}
      </div>

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
