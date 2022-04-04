import ImageWrapper from './center_img';
import ItemFooter from './item_footer';
import Skeleton from './skeleton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/index';

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

const imgFormat = (webUse: boolean) => {
  return webUse === true && isChrome() === true ? 'webp' : 'jpg';
}

const isChrome = () => {
  const agent = window.navigator.userAgent.toLowerCase();
  return agent.indexOf('chrome') >= 0;
}


export default function ItemCard({ num }: Props) {

  const [loading, setLoading] = useState<boolean>(true);
  // 새로고침시 캐시에서 이미지를 찾지 않고 다시 로드한다.
  const newRender = useSelector((state: RootState) => state.options.newRender);
  const imgSize = useSelector((state: RootState) => state.options.imgSize);
  const webpUse = useSelector((state: RootState) => state.options.webFormat);
  const format = imgFormat(webpUse);
  const IMGSRC = `./imageoptimize/${format}/${imgSize}/img${num}.${format}?time=` + new Date().getTime();

  useEffect(() => {
    setLoading(true);
  },[newRender])

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
            alt={'메인 이미지'}
          />
        </ImageWrapper>
        <ItemFooter
          num={num + 99}
          imgSize={imgSize}
          render={newRender}
          format={format}
        />
      </ItemCardWrapper>
    </>
  )
}