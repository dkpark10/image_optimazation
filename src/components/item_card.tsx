import ImageWrapper from './center_img';
import ItemFooter from './item_footer';
import Skeleton from './skeleton';
import styled from 'styled-components';
import { useState } from 'react';

const ItemCardWrapper = styled.div`
  display:inline-block;
  padding:10px;
  height:280px;
  width:307px;
  border-radius:6px;
  background: linear-gradient(145deg, #c2c2cd, #e7e7f4);
  box-shadow:  12px 17px 42px #727279,
             -12px -12px 42px #ffffff;

`;

interface Props {
  num: number;
}

export default function ItemCard({ num }: Props) {

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${num}` as const;
  const [loading, setLoading] = useState<boolean>(true);

  const IMGSRC = `./imageoptimize/jpeg/75/img${num}.jpg`;

  return (
    <>
      <ItemCardWrapper>
        <ImageWrapper
          width={'100%'}
          height={'80%'}
        >
          {loading && <Skeleton />}
          <img
            src={IMGSRC}
            onLoad={() => setLoading(false)}
            alt={'랜덤 메인 이미지'}
          />
        </ImageWrapper>
        <ItemFooter
          num={num + 99}
        />
      </ItemCardWrapper>
    </>
  )
}