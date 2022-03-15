import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  display?: string;
}

const ModalWrapper = styled.div<Props>`
  display: ${({ display }) => display};
  position: fixed;
  width:100%;
  height:100%;
  z-index: 1;

  .overlay{
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    display: flex;

    .modal-content{
      padding: 25px 50px;
      background-color: white;
      border:2px solid sandybrown;
      text-align: center;
      font-weight: bold;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2);
    }
  }
`;

export default function OptionModal({
  display = 'none'
}: Props) {

  const [useSprite, setUseSprite] = useState<boolean>(false);
  const [useLazyLoading, setUseLazyLoading] = useState<boolean>(true);
  const [imageFormat, setImageFormat] = useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(9);

  return (
    <>
      <ModalWrapper
        display={display}
      >
        <div className='overlay'>
          <div className='modal-content'>
            <h1>sdaasd</h1>
            <h1>sdaasd</h1>
            <h1>sdaasd</h1>
            <h1>sdaasd</h1>
            <h1>sdaasd</h1>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}