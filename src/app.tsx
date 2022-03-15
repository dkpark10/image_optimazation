import React, { useEffect, useState } from 'react';
import ItemCard from './components/item_card';
import Header from './components/header';
import OptionModal from './components/option_modal';
import styled from 'styled-components';

interface Props {
  len: number;
}

const AppWrapper = styled.div<Props>`
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

export default function App(): JSX.Element {

  const [target, setTarget] = useState<any>(null);
  const [items, setItems] = useState<number[]>(new Array(9).fill(-1));
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const addItem = async () => {
    if (items.length >= 300) {
      return;
    }
    setIsLoaded(true);
    await new Promise(_ => setTimeout(_, 500));
    setItems(prev => prev.concat(Array.from({ length: 9 }, (_, i) => i + 1 + prev.length)));
    setIsLoaded(false);
  }

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(async ([entry], intersec: IntersectionObserver) => {
        if (entry.isIntersecting && !isLoaded) {
          intersec.unobserve(entry.target);
          await addItem();
          intersec.observe(entry.target);
        }
      }, {
        threshold: 0.4
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target])

  useEffect(() => {
    new Promise(_ => setTimeout(() => {
      setItems(Array.from({ length: 9 }, (_, i) => i + 1));
    }, 340));
  }, []);

  return (
    <>
      <OptionModal />
      <Header />
      <AppWrapper len={items.length + 1}>
        {items.map((ele, idx) =>
          <ItemCard
            randomValue={ele}
            key={idx}
          />
        )}
        <div className='target' ref={setTarget}>
          {isLoaded &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) =>
              <ItemCard
                randomValue={-1}
                key={idx}
              />
            )}
        </div>
      </AppWrapper>
    </>
  )
}