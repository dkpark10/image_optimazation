import styled from 'styled-components';
import CircleImage from './circle_img';
import Image from './center_img';

const FooterWrapper = styled.div`
  
  position: relative;
  height:20%;

  .footer_item{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
  }  

  .polygon, .circle, .star, .triangle, .rectangle{
    background: url('images.png') no-repeat;
  }

  .polygon{
    width:100%;
    height:100%;
    background-position: 0 0;
  }
  .circle{
    width:100%;
    height:100%;
    background-position: -128px 0;
  }
  .star{
    width:100%;
    height:100%;
    background-position: -256px 0;
  }
  .triangle{
    width:100%;
    height:100%;
    background-position: -384px 0;
  }
  .rectangle{
    width:100%;
    height:100%;
    background-position: -512px 0;
  }
`;

interface Props {
  randomValue: number;
}

export default function ItemFooter({ randomValue }: Props) {

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${randomValue + 300}` as const;

  const size = {
    width: '',
    height: ''
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
            <div className='polygon'/>
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <div className='circle'/>
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <div className='star'/>
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <div className='triangle'/>
          </Image>
          <Image
            width={size.width}
            height={size.height}
          >
            <div className='rectangle'/>
          </Image>
        </div>
      </FooterWrapper>
    </>
  )
}