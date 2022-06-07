import ImageWrapper from './center_img';
import ItemFooter from './item_footer';
import Skeleton from './skeleton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/index';

const ItemCardWrapper = styled.div`

  @media screen and (${({ theme }) => theme.mobile}){
    width:94vw;
    height:82vw;
  }

  @media screen and (${({ theme }) => theme.minTablet}) and (${({ theme }) => theme.maxTablet}){
    width:47vw;
    height:41vw;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    width:307px;
    height:280px;
  }

  display:inline-block;
  padding:10px;
  border-radius:6px;
  background: linear-gradient(145deg, #c2c2cd, #e7e7f4);
  box-shadow:  12px 17px 42px #727279,
             -12px -12px 42px #ffffff;
`;

interface Props {
  num: number;
}

export default function ItemCard({ num }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  // 새로고침시 캐시에서 이미지를 찾지 않고 다시 로드한다.
  const newRender = useSelector((state: RootState) => state.options.newRender);
  const imgSize = useSelector((state: RootState) => state.options.imgSize);
  const webpUse = useSelector((state: RootState) => state.options.webFormat);

  const getImgSrc = (imgNum: number): string => {
    const devPath = process.env.NODE_ENV === 'production' ? '/image_optimazation' : '';
    const format = webpUse === true && availableBrowser() === true ? 'webp' : 'jpg';
    return `${devPath}/mainimages/${format}/${imgSize}/img${num + imgNum}.${format}?time=` + new Date().getTime();
  }

  const availableBrowser = (): boolean => {
    const agent = window.navigator.userAgent.toLowerCase();
    return agent.indexOf('chrome') > -1 || agent.indexOf('mozilla') > -1 || agent.indexOf('edg') > -1;
  }

  useEffect(() => {
    setLoading(true);
  }, [newRender])

  return (
    <>
      <ItemCardWrapper>
        <ImageWrapper
          width={'100%'}
          height={'80%'}
        >
          {loading && <Skeleton />}
          <img
            src={getImgSrc(0)}
            onLoad={() => setLoading(false)}
            alt={'메인 이미지'}
          />
        </ImageWrapper>
        <ItemFooter
          imgsrc={getImgSrc(99)}
          render={newRender}
        />
      </ItemCardWrapper>
    </>
  )
}