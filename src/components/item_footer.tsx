import styled from 'styled-components';
import Skeleton from './skeleton';
import CircleImage from './circle_img';
import Image from './center_img';

const FooterWrapper = styled.div`
  
  position: relative;
  height:20%;

  .footer_item{
    display:flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
  }  
`;

interface Props {
  randomValue: number;
}

export default function ItemFooter({ randomValue }: Props) {

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${randomValue + 300}` as const;

  const size = {
    width: '32px',
    height: '32px'
  }

  const isLoaded = () => {
    if (randomValue !== -1) {
      return <img src={RANDOM_IMG1} />;
    } else {
      return <div
        className='skeleton-item'
        style={{ width: '100%', height: '100%' }}
      />
    }
  }

  return (
    <>
      <FooterWrapper>
        <div className='footer_item'>
          <CircleImage
            width={'37px'}
            height={'37px'}
          >
            {isLoaded()}
          </CircleImage>
          <Image
            width={size.width}
            height={size.height}
          >
            <img src={'polygon.png'} />
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <img src={'star.png'} />
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <img src={'right.png'} />
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <img src={'rounded-rectangle.png'} />
          </Image>
        </div>
      </FooterWrapper>
    </>
  )
}