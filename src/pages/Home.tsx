import {Route, Routes, useNavigate} from 'react-router-dom';
import MainWrapper from '../components/MainWrapper';
import Logo from 'components/Logo';
import {useContext, useState} from 'react';
import {AppContext} from 'App';
import BannerLayer from 'components/BannerLayer';
import BannerContent from 'components/BannerContent';
import useTrips from 'hooks/useTrips';
import Banner from 'components/Banner';
import Upload from './Upload';
import Trip from './Trip';

const backgroundImageDesktop =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbackground_desktop.jpg?alt=media&token=3c81faed-e824-4c3c-a99a-e4fb42194df9';

const backgroundImageMobile =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Ftop_mobile.png?alt=media&token=54dda803-517e-4756-99d8-73fbf69c5d89';

const bottomImageDesktop =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbottom.png?alt=media&token=c1a56317-3fed-4bd5-8d19-b2391b217820';

const bottomImageMobile =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbottom_mobile.png?alt=media&token=8314da6a-9355-4fff-b3d4-70e87bdd604c';

const Home = () => {
  const [showHeader, setShowHeader] = useState(false);
  const navigate = useNavigate();
  const {trips, isLoading} = useTrips();
  const {isMobile} = useContext(AppContext);

  const hero = (
    <BannerContent
      // speed={-20}
      onProgressChange={(progress) => {
        if (progress >= 0.7) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }}
    >
      <div
        style={{
          width: isMobile ? '90vw' : '50vw',
          textAlign: 'center',
        }}
      >
        <Logo width={isMobile ? '100%' : '50%'} />

        <div
          style={{
            borderBottom: 'solid 1px #000',
            width: '30%',
            margin: '1rem auto',
            opacity: '.2',
          }}
        ></div>
        <div
          className="lora"
          style={{
            color: '#161515',
            opacity: '.6',
            fontSize: '1.3rem',
            letterSpacing: '-.05rem',
            textShadow: '0px 0px 5px rgba(0,0,0,0.2)',
          }}
        >
          In every walk with nature,
          <br /> one receives far more than he seeks
          <div
            style={{
              fontSize: '.8rem',
              letterSpacing: '0',
              color: 'black',
            }}
          >
            John Muir
          </div>
        </div>
      </div>
    </BannerContent>
  );
  return (
    <MainWrapper>
      {/*<Header isVisible={showHeader} />*/}

      <Routes>
        <Route path="/trip/:tripId" element={<Trip />}>
          <Route path="entry/:entryId" />
        </Route>
        <Route path="/upload" element={<Upload />} />

        <Route
          path="/"
          element={
            <>
              <Banner>
                <BannerLayer
                  image={{
                    mobile: backgroundImageMobile,
                    desktop: backgroundImageDesktop,
                  }}
                  speed={-30}
                  backgroundSize={!isMobile ? 'cover' : 'contain'}
                />
                {!isMobile && hero}
                <BannerLayer
                  speed={isMobile ? -10 : 20}
                  image={{
                    mobile: bottomImageMobile,
                    desktop: bottomImageDesktop,
                  }}
                  backgroundSize={!isMobile ? 'cover' : 'contain'}
                />
                {isMobile && hero}
              </Banner>

              {trips.map((trip) => {
                return (
                  <Banner>
                    <BannerLayer
                      image={{
                        desktop: trip.photoDesktop,
                        mobile: trip.photoMobile,
                      }}
                      speed={-30}
                    />
                    <BannerContent alignment="center">
                      <div
                        style={{
                          width: isMobile ? '80vw' : '50vw',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          className="link"
                          onClick={() => {
                            navigate(`/trip/${trip.id}`);
                          }}
                        >
                          <div
                            className="lora"
                            style={{
                              fontWeight: '700',
                              color: 'white',
                              fontSize: '3.5rem',
                              textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                            }}
                          >
                            {trip.name}
                          </div>
                          <div
                            className="great-vibes-regular"
                            style={{
                              color: 'white',
                              fontSize: '1.5rem',
                              textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                            }}
                          >
                            {trip.description}
                          </div>
                        </div>
                      </div>
                    </BannerContent>
                  </Banner>
                );
              })}
            </>
          }
        />
      </Routes>
    </MainWrapper>
  );
};

export default Home;
