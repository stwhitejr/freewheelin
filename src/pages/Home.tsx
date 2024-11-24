import PageWrapper from '../components/PageWrapper';
import {ParallaxBannerLayer} from 'react-scroll-parallax';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageWrapper
      sections={[
        {
          background: {
            desktop:
              'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg")',
            mobile: '',
          },
          content: (
            <>
              <ParallaxBannerLayer speed={-30}>
                <h1>hello world!</h1>
              </ParallaxBannerLayer>
            </>
          ),
        },
        {
          background: {
            desktop:
              'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg")',
            mobile: '',
          },
          content: (
            <>
              <ParallaxBannerLayer speed={-30}>
                <h1>goodbye world!</h1>
              </ParallaxBannerLayer>
            </>
          ),
        },
      ]}
    />
  );
};

export default Home;
