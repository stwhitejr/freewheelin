import PageWrapper from '../components/PageWrapper';
import {ParallaxBannerLayer} from 'react-scroll-parallax';

// TODO: Get all trips
// on click go to trip route with doc ID in url param

// then in trip page:
// get doc of trip collection with url param
// get entries sub collection
// store in some kind of context/provider
// then on click entry store the entry doc id in url

// then in entry page:
// get entry using url param from trip context
// get the "data/meat" sub collection of the entry


// in total if you land on an entry page we will call 1 trip API, 1 trip entry subcollection

const Trips = () => {
  return (
    <PageWrapper
      includeHeader
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

export default Trips;
