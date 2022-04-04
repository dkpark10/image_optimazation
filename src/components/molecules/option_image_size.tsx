import RadioButton from '../atoms/radio_button';
import styled from 'styled-components';
import { useState } from 'react';

const ImageSizeOptionWrapper = styled.div`
  display:flex;
  justify-content: space-around;
  margin:4px 0px;

  .size-text{
    font-size:0.8rem;
    text-align: center;
    margin:0px;
  }
`;

interface Props{
  change: React.ChangeEventHandler<HTMLInputElement>;
  checked: string;
}

export default function ImageSizeOption({ change, checked }: Props) {
  const sizeLabel = ['100', '75', '50'];
  
  return (
    <>
      <div>
        이미지 사이즈
      </div>
      <ImageSizeOptionWrapper>
        {sizeLabel.map((ele, idx) =>
          <span key={idx}>
            <RadioButton
              value={ele}
              name={'image-size'}
              id={ele}
              change={change}
              check={checked === ele}
            />
            <div className='size-text'>
              <label htmlFor={ele}>{ele}%</label>
            </div>
          </span>
        )}
      </ImageSizeOptionWrapper>
    </>
  )
}