import {AppContext} from 'App';
import {ReactNode, useContext} from 'react';
import BannerLayer, {BannerLayerProps} from './BannerLayer';

export interface BannerContentProps extends BannerLayerProps {
  children: ReactNode;
  alignment?: 'top' | 'center';
}

const BannerContent = ({
  children,
  alignment = 'top',
  ...rest
}: BannerContentProps) => {
  const {isMobile} = useContext(AppContext);

  let alignmentProps: Record<string, any> = {
    marginTop: isMobile ? '5vh' : '10vh',
    alignItems: 'flex-start',
  };
  if (alignment === 'center') {
    alignmentProps = {
      alignItems: 'center',
    };
  }
  return (
    <BannerLayer {...rest}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          ...alignmentProps,
        }}
      >
        {children}
      </div>
    </BannerLayer>
  );
};

export default BannerContent;
