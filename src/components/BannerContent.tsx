import {AppContext} from 'App';
import {ReactNode, useContext} from 'react';
import {ParallaxBannerLayer} from 'react-scroll-parallax';

export interface BannerContentProps {
  children: ReactNode;
  speed?: number;
}

const BannerContent = ({children, speed}: BannerContentProps) => {
  const {isMobile} = useContext(AppContext);
  return (
    <ParallaxBannerLayer speed={speed}>
      <div
        style={{
          marginTop: isMobile ? '5vh' : '10vh',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </ParallaxBannerLayer>
  );
};

export default BannerContent;
