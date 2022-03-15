import Image from './center_img';
import ItemFooter from './item_footer';
import Skeleton from './skeleton';
import styled from 'styled-components';

const ItemCardWrapper = styled.div`
  display:inline-block;
  padding:10px;
  height:280px;
  width:307px;
  border-radius:6px;
  background-color:white;
  box-shadow: 5px 5px 16px -2px rgb(47, 47, 48);
`;

interface Props {
  randomValue: number;
}

export default function ItemCard({ randomValue }: Props) {

  const RANDOM_IMG1 = `https://source.unsplash.com/random/${randomValue}` as const;
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
      <ItemCardWrapper>
        <Image
          width={'100%'}
          height={'80%'}
        >
          {isLoaded()}
        </Image>
        <ItemFooter
          randomValue={randomValue}
        />
      </ItemCardWrapper>
    </>
  )
}