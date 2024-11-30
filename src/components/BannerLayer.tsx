import {AppContext} from 'App';
import {useContext} from 'react';
import {ParallaxBannerLayer} from 'react-scroll-parallax';

export interface BannerLayerProps {
  image: {
    desktop: string;
    mobile?: string;
  };
  speed?: number;
  backgroundSize?: string;
}

const BannerLayer = (props: BannerLayerProps) => {
  const {isMobile} = useContext(AppContext);
  return (
    <ParallaxBannerLayer
      image={
        isMobile && props.image.mobile
          ? props.image.mobile
          : props.image.desktop
      }
      speed={props.speed}
      // style={{backgroundSize: props.backgroundSize || 'contain'}}
    />
  );
};

export default BannerLayer;
