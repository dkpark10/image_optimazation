import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ToggleButton from './toggle';
import Button from './button';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../reducer/show_modal';

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
      padding: 35px 50px;
      background-color: white;
      border:2px solid #1033e3;
      font-weight: bold;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2);
      text-align: center;;
    }

    .option-item{
      text-align: left;
    }

    .modal-content :first-child{
      text-align: center;
    }
}`;

export default function OptionModal({
  display = 'none'
}: Props) {

  const dispatch = useDispatch();
  const ref: React.MutableRefObject<boolean[]> = useRef([true, false, false]);
  const [itemCount, setItemCount] = useState<number>(9);
  const optionList = ['lazy-loading', 'css-sprite', 'image-format'];

  useEffect(() => {
    // 스크롤 막는다.
    if (display !== 'none') {
      document.body.style.overflow = 'hidden';
    }
  }, [])

  const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemCount(Number(e.currentTarget.value));
  }

  const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case optionList[0]:
        ref.current[0] = e.currentTarget.checked;
        break;
      case optionList[1]:
        ref.current[1] = e.currentTarget.checked;
        break;
      case optionList[2]:
        ref.current[2] = e.currentTarget.checked;
        break;
      default: break;
    }
  }

  const checkboxOptionList: JSX.Element[] = optionList.map((ele, idx) =>
    <div className='option-item' key={idx}>
      <ToggleButton
        id={ele}
        name={ele}
        onChange={checkboxChange}
      />
      <label htmlFor={ele}>{ele} 사용하기</label>
    </div>
  );

  const renderClick = () => {
    ref.current.map(ele => console.log(ele));
    // 스크롤 해제
    document.body.style.overflow = 'unset';
    dispatch(setShowModal('none'));
  }

  return (
    <>
      <ModalWrapper
        display={display}
      >
        <div className='overlay'>
          <div className='modal-content'>
            <div className='option-item'>
              <div>
                <label htmlFor='item-count'>아이템 갯수: {itemCount}</label>
              </div>
              <input
                type="range"
                id="item-count"
                name="item-count"
                min="9"
                max="297"
                step="9"
                onChange={rangeChange}
              />
            </div>
            {checkboxOptionList}
            <Button onClick={renderClick}>
              <span>다시 렌더링 하기</span>
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}