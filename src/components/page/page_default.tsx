import React, { useEffect, useState } from 'react';
import ItemCard from '../item_card';
import Header from '../header';
import styled from 'styled-components';
import { compose } from 'redux';

const AppWrapper = styled.main`
  position: relative;
  height: 100%;
`;

const AppStyle = styled.ul`

  @media screen and (${({ theme }) => theme.mobile}){
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (${({ theme }) => theme.minTablet}) and (${({ theme }) => theme.maxTablet}){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${({ theme }) => theme.desktop}){
    grid-template-columns: repeat(3, 1fr);
  }

  display:grid;
  justify-items: stretch;
  gap: 15px;
  position: absolute; 
  left:50%;
  transform: translate(-50%);
  list-style: none;
`;

interface Props {
  itemCount: number;
}

export default function Page({ itemCount }: Props): JSX.Element {

  const [items, setItems] = useState<number[]>(new Array(itemCount).fill(-1));

  useEffect(() => {
    setItems(Array.from({ length: itemCount }, (_, i) => i));
  }, []);

  return (
    <>
      <Header />
      <AppWrapper>
        <AppStyle>
          {items.map((ele, idx) =>
            <ItemCard
              num={ele}
              key={idx}
            />
          )}
        </AppStyle>
      </AppWrapper>
    </>
  )
}