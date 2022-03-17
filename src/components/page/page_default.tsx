import React, { useEffect, useState } from 'react';
import ItemCard from '../item_card';
import Header from '../header';
import styled from 'styled-components';

interface Props {
  itemCount: number;
}

const AppWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
  gap: 15px;
  width:942px;
  position: absolute; 
  left:50%;
  top: 6%;
  transform: translate(-50%);

  .target {
    height: 280px;
    &:last-child{
      display:grid;
      grid-column: auto / span 3;
      grid-template-columns: repeat(3, 1fr);
      justify-items: stretch;
      gap: 10px;
    }
  }

  @keyframes skeleton-gradient {
  0% {
      background-color: rgba(165, 165, 165, 0.24);
    }
  50% {
      background-color: rgba(138, 138, 138, 0.5);
    }
  100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }

  .skeleton-item {
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }
`;

export default function Page({ itemCount }: Props): JSX.Element {

  const [items, setItems] = useState<number[]>(new Array(itemCount).fill(-1));

  useEffect(() => {
    new Promise(_ => setTimeout(() => {
      setItems(Array.from({ length: itemCount }, (_, i) => i + 1));
    }, 340));
  }, []);

  return (
    <>
      <Header />
      <AppWrapper>
        {items.map((ele, idx) =>
          <ItemCard
            randomValue={ele}
            key={idx}
          />
        )}
      </AppWrapper>
    </>
  )
}