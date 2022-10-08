import React, { useEffect, useState } from 'react';
import ItemCard from '../molecules/item_card';
import Header from '../organisms/header';
import styled from 'styled-components';

const AppWrapper = styled.main`
  position: relative;
  height:100%;
`;

const AppStyle = styled.ul`
  @media screen and (${({ theme }) => theme.mobile}){
    grid-template-columns: repeat(1, 1fr);
    .target{
      grid-column: auto / span 1;
    }
  }

  @media screen and (${({ theme }) => theme.minTablet}) and (${({ theme }) => theme.maxTablet}){
    grid-template-columns: repeat(2, 1fr);
    .target{
      grid-column: auto / span 2;
    }
  }

  @media screen and (${({ theme }) => theme.desktop}){
    grid-template-columns: repeat(3, 1fr);
    .target{
      grid-column: auto / span 3;
    }
  }

  display:grid;
  justify-items: stretch;
  gap: 15px;
  position: absolute; 
  left:50%;
  transform: translate(-50%);
  list-style: none;

  .target {
    height: 280px;
    &:last-child{
      display:grid;
      justify-items: stretch;
    }
  }
`;

interface Props {
  itemCount: number;
}

export default function LazyLoadPage({ itemCount }: Props): JSX.Element {
  const [target, setTarget] = useState<Element>(null);
  const [items, setItems] = useState<number[]>([0,1,2,3,4,5,6,7,8]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const addItem = async () => {
    setIsLoaded(true);
    setItems(prev => prev.concat(Array.from({ length: 9 }, (_, i) => i + 1 + prev.length)));
    setIsLoaded(false);
  }

  const intersectionCallBack = async ([entry], intersec: IntersectionObserver) => {
    if (entry.isIntersecting && !isLoaded) {
      intersec.unobserve(entry.target);
      await addItem();
      intersec.observe(entry.target);
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(intersectionCallBack, {
        threshold: 0.4
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target])

  return (
    <>
      <Header />
      <AppWrapper>
        <AppStyle>
          {items.map((ele, idx) =>
            <li key={idx}>
              <ItemCard
                num={ele}
              />
            </li>
          )}
          {itemCount > items.length &&
            <div className='target' ref={setTarget}>
              {isLoaded &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, idx) =>
                  <ItemCard
                    num={ele}
                    key={idx}
                  />
                )}
            </div>}
        </AppStyle>
      </AppWrapper>
    </>
  )
}