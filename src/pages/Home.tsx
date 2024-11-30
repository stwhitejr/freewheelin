import {useNavigate} from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import {ParallaxBannerLayer} from 'react-scroll-parallax';
import Logo from 'components/Logo';
import {useContext} from 'react';
import {AppContext} from 'App';
import BannerLayer from 'components/BannerLayer';
import BannerContent from 'components/BannerContent';

const backgroundImageDesktop =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbackground_desktop.jpg?alt=media&token=3c81faed-e824-4c3c-a99a-e4fb42194df9';

const backgroundImageMobile =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Ftop_mobile.png?alt=media&token=54dda803-517e-4756-99d8-73fbf69c5d89';

const bottomImageDesktop =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbottom.png?alt=media&token=c1a56317-3fed-4bd5-8d19-b2391b217820';

const bottomImageMobile =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/home%2Fbottom_mobile.png?alt=media&token=8314da6a-9355-4fff-b3d4-70e87bdd604c';

const Home = () => {
  const navigate = useNavigate();
  const {isMobile} = useContext(AppContext);
  return (
    <PageWrapper
      sections={[
        {
          content: (
            <>
              <BannerLayer
                image={{
                  mobile: backgroundImageMobile,
                  desktop: backgroundImageDesktop,
                }}
                speed={-50}
              />
              <BannerLayer
                image={{
                  mobile: bottomImageMobile,
                  desktop: bottomImageDesktop,
                }}
                speed={-10}
              />
              <BannerContent>
                <div
                  style={{
                    width: isMobile ? '80vw' : '50vw',
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
                  {/* <button
                      onClick={() => {
                        navigate('/trips');
                      }}
                    >
                      Go to trips
                    </button> */}
                </div>
              </BannerContent>
            </>
          ),
        },
        {
          content: (
            <>
              <BannerLayer
                image={{
                  mobile: backgroundImageMobile,
                  desktop: backgroundImageDesktop,
                }}
                speed={-50}
              />
              <BannerLayer
                image={{
                  mobile: bottomImageMobile,
                  desktop: bottomImageDesktop,
                }}
                speed={-10}
              />
              <BannerContent>
                <div
                  style={{
                    width: isMobile ? '80vw' : '50vw',
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
                  {/* <button
                      onClick={() => {
                        navigate('/trips');
                      }}
                    >
                      Go to trips
                    </button> */}
                </div>
              </BannerContent>
            </>
          ),
        },
      ]}
    />
  );
};

export default Home;
