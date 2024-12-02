import {ComponentProps, ReactNode} from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';

export interface BannerProps extends ComponentProps<typeof ParallaxBanner> {
  children: ReactNode;
}

const Banner = ({children, style}: BannerProps) => {
  return (
    <ParallaxBanner
      style={{
        aspectRatio: '2 / 1',
        height: '100vh',
        ...style,
      }}
    >
      {children}
    </ParallaxBanner>
  );
};

export default Banner;
