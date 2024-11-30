import {ReactNode} from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';

export interface BannerProps {
  children: ReactNode;
}

const Banner = ({children}: BannerProps) => {
  return (
    <ParallaxBanner
      style={{
        aspectRatio: '2 / 1',
        height: '100vh',
      }}
    >
      {children}
    </ParallaxBanner>
  );
};

export default Banner;
