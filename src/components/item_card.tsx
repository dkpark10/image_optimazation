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
  randomValue: number;
}

export default function ItemCard({ randomValue }: Props) {

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${randomValue}` as const;
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <ItemCardWrapper>
        <ImageWrapper
          width={'100%'}
          height={'80%'}
        >
          {loading && <Skeleton />}
          <img
            src={RANDOM_IMG1}
            onLoad={() => setLoading(false)}
          />
        </ImageWrapper>
        <ItemFooter
          randomValue={randomValue}
        />
      </ItemCardWrapper>
    </>
  )
}