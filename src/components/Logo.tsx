export const logoUrl =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/logo.png?alt=media&token=8d4bd3f0-d979-454a-a3ae-3fab6b3f21db';

const Logo = (props) => {
  return <img src={logoUrl} alt="Freewheelin" style={props} />;
};

export default Logo;
