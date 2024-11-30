import Logo from './Logo';

export interface HeaderProps {
  isVisible?: boolean;
}

const vanIcon =
  'https://firebasestorage.googleapis.com/v0/b/freewheelin-5ff80.firebasestorage.app/o/van.png?alt=media&token=26f9fd85-ef54-428c-acc4-39cfa3abbc4f';

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#eff5f6',
        height: '50px',
        zIndex: 2,
        transition: 'opacity .3s',
        opacity: props.isVisible ? 1 : 0,
        justifyContent: 'center',
        display: 'flex',
        // alignItems: 'center'
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      }}
    >
      <Logo height="55px" />
      <img src={vanIcon} alt="Van Life" style={{height: '45px', paddingTop: '10px', paddingLeft: '40px'}} />
    </div>
  );
};

export default Header;
