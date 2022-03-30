import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ToggleButton from './toggle';
import Button from './button';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../reducer/show_modal';
import { RootState } from '../reducer/index';
import { OptionStatus, setOptimizeOptions } from '../reducer/options';
import RangeInput from './atoms/input_range';
import RadioButton from './atoms/radio_button';

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
      font-weight: bold;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2);
      text-align: center;;
      background: linear-gradient(145deg, #c2c2cd, #e7e7f4);
      box-shadow:  17px 17px 38px #121212,
             -1px -1px 3px #ffffff;
    }

    .option-item{
      text-align: left;
      margin: 4px 0;
    }

    .modal-content :first-child{
      text-align: center;
    }
}`;

export default function OptionModal({
  display = 'none'
}: Props) {

  const dispatch = useDispatch();
  const [options, setOptions] = useState<OptionStatus>(useSelector((state: RootState) => state.options));

  useEffect(() => {
    // 스크롤 막는다.
    if (display !== 'none') {
      document.body.style.overflow = 'hidden';
    }
  })

  const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setOptions(prev => ({
      ...prev,
      itemCount: Number(e.target.value)
    }))
  }

  const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'lazy-loading':
        setOptions(prev => ({
          ...prev,
          lazyLoading: e.target.checked
        }))
        break;
      case 'css-sprite':
        setOptions(prev => ({
          ...prev,
          sprite: e.target.checked
        }))
        break;
      case 'image-format':
        setOptions(prev => ({
          ...prev,
          webFormat: e.target.checked
        }))
        break;
      default: break;
    }
  }

  const renderClick = () => {
    dispatch(setShowModal('none'));
    dispatch(setOptimizeOptions(options));
    // 스크롤 해제
    document.body.style.overflow = 'unset';
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
                <label htmlFor='item-count'>아이템 갯수: {options.itemCount}</label>
              </div>
              <RangeInput
                id="item-count"
                name="item-count"
                min={9}
                max={99}
                step={9}
                value={options.itemCount}
                onChange={rangeChange}
              />
            </div>
            <div className='option-item'>
              <ToggleButton
                id={'lazy-loading'}
                name={'lazy-loading'}
                onChange={checkboxChange}
                checked={options.lazyLoading}
              />
              <label htmlFor={'lazy-loading'}>lazy-loading 사용하기</label>
            </div>
            <div className='option-item'>
              <ToggleButton
                id={'css-sprite'}
                name={'css-sprite'}
                onChange={checkboxChange}
                checked={options.sprite}
              />
              <label htmlFor={'css-sprite'}>css-sprite 사용하기</label>
            </div>
            <div className='option-item'>
              <ToggleButton
                id={'webp-format'}
                name={'webp-format'}
                onChange={checkboxChange}
                checked={options.webFormat}
              />
              <label htmlFor={'webp-format'}>webp 포맷 사용하기</label>
            </div>
            <Button onClick={renderClick}>
              <span>다시 렌더링 하기</span>
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}