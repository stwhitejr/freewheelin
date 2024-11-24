export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        background: 'white',
        height: '50px',
        zIndex: 2,
      }}
    >
      foobar
    </div>
  );
};

export default Header;
