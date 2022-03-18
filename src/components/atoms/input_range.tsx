import styled from 'styled-components';

interface Props {
  id: string;
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  background: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RangeStyle = styled.input.attrs<Props>(({ type }) => {
  return {
    type: 'range',
  }
})`
  background: ${({ value }) => 
    `linear-gradient(to right, #17179d 0%, 
      #5959de ${Math.floor(value as number / 3)}%, 
      #fff ${Math.floor(value as number / 3)}%, #ccc 100%)`
  };
  border-radius: 8px;
  height: 9px;
  border:none;
  width: 95%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  box-shadow:  3px 3px 5px #545458;

  &::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
    background: linear-gradient(270deg, #17179d, #7b7bdb);
    box-shadow:  -1px -1px 2px #ffffff,
               3px 2px 2px #616166;
  }
`;

export default function InputRange({
  id,
  name,
  min,
  max,
  step,
  value,
  onChange,
}: Partial<Props>) { 

  return (
    <>
      <RangeStyle
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </>
  )
}