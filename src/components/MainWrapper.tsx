import {ReactNode} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';

export interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = (props: MainWrapperProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <ParallaxProvider>{props.children} </ParallaxProvider>
    </div>
  );
};

export default MainWrapper;
