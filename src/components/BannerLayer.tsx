import {AppContext} from 'App';
import {ComponentProps, useContext} from 'react';
import {ParallaxBannerLayer} from 'react-scroll-parallax';

export interface BannerLayerProps
  extends Omit<ComponentProps<typeof ParallaxBannerLayer>, 'image'> {
  image?: {
    desktop: string;
    mobile?: string;
  };
  backgroundSize?: string;
}

const BannerLayer = ({image, backgroundSize, ...rest}: BannerLayerProps) => {
  const {isMobile} = useContext(AppContext);
  return (
    <ParallaxBannerLayer
      {...rest}
      {...(image
        ? {image: isMobile && image.mobile ? image.mobile : image.desktop}
        : {})}
      style={{backgroundSize: backgroundSize || 'cover'}}
    />
  );
};

export default BannerLayer;
