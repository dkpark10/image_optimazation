import styled from 'styled-components';
import CircleImage from './circle_img';
import ImageWrapper from './center_img';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/index';
import Skeleton from './skeleton';
import { useEffect, useState } from 'react';

interface Props {
  imgsrc: string;
  render: boolean;
  spriteSrc?: string;
}

const FooterWrapper = styled.div<Partial<Props>>`
  
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

  .polygon, .new-moon, .star, .right, .rounded-rectangle{
    background: url(${({ spriteSrc }) => {
    return spriteSrc
  }}) no-repeat;
  }

  .polygon{
    background-position: 0 0;
  }
  .new-moon{
    background-position: -34px 0;
  }
  .star{
    background-position: -68px 0;
  }
  .right{
    background-position: -102px 0;
  }
  .rounded-rectangle{
    background-position: -136px 0;
  }
`;


export default function ItemFooter({
  imgsrc,
  render
}: Props) {

  const sprite = useSelector((state: RootState) => state.options.sprite);
  const productionMode = process.env.NODE_ENV === 'production';
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
  }, [render])

  const size = {
    width: '34px',
    height: '34px'
  }

  const spriteImage = (sprite: boolean): JSX.Element[] => {

    const classNameList = ['polygon', 'new-moon', 'star', 'right', 'rounded-rectangle'];

    return classNameList.map((className, idx) =>
      <ImageWrapper
        width={size.width}
        height={size.height}
        boxShadow={true}
        key={idx}
      >
        {sprite ? <div className={className} /> :
          <img
            src={productionMode ? `/image_optimazation/public/${className}gray.png` : `${className}gray.png`}
            alt={`스프라이트 이미지${idx}`}
          />}
      </ImageWrapper>
    )
  }

  return (
    <>
      <FooterWrapper
        spriteSrc={productionMode ? '../public/images34gray.png' : 'images34gray.png'}
      >
        <div className='footer_item'>
          <CircleImage
            width={'37px'}
            height={'37px'}
          >
            {loading && <Skeleton />}
            <img
              src={imgsrc}
              onLoad={() => setLoading(false)}
              alt={'프로필 이미지'}
            />
          </CircleImage>
          {spriteImage(sprite)}
        </div>
      </FooterWrapper>
    </>
  )
}