import {ReactNode} from 'react';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import Header from './Header';

interface Section {
  background: {
    desktop: string;
    mobile: string;
  };
  content: ReactNode;
  speed?: number;
}

export interface PageWrapperProps {
  sections: Section[];
  includeHeader?: boolean;
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      {props.includeHeader && <Header />}

      <ParallaxProvider>
        {props.sections.map((section) => (
          <ParallaxBanner
            style={{
              aspectRatio: '2 / 1',
              background: section.background.desktop,
            }}
          >
            {section.content}
          </ParallaxBanner>
        ))}
      </ParallaxProvider>
    </div>
  );
};

export default PageWrapper;
