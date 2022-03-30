import React, { useEffect, useState } from 'react';
import ItemCard from '../item_card';
import Header from '../header';
import styled from 'styled-components';

const AppWrapper = styled.main`
  position: relative;
  height:100%;
`;

const AppStyle = styled.ul`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
  gap: 15px;
  width:942px;
  position: absolute; 
  left:50%;
  transform: translate(-50%);
  list-style: none;

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

interface Props {
  itemCount: number;
}

export default function LazyLoadPage({ itemCount }: Props): JSX.Element {

  const [target, setTarget] = useState<any>(null);
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
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) =>
                  <ItemCard
                    num={-1}
                    key={idx}
                  />
                )}
            </div>}
        </AppStyle>
      </AppWrapper>
    </>
  )
}