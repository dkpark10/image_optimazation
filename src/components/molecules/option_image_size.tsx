import RadioButton from '../atoms/radio_button';
import styled from 'styled-components';

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

export default function ImageSizeOption() {

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