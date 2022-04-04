import styled from 'styled-components';

interface AbsoluteSize {
  top: string;
  left: string;
}

interface Props {
  value: string;
  name: string;
  id: string;
  check?: boolean;
  change?: React.ChangeEventHandler<HTMLInputElement>;
  size?: AbsoluteSize
}

const RadioStyle = styled.span<Partial<Props>>`
  position: relative;
  display:inline-block;
  height: 19px;
  width: 19px;
  margin:0px;

  input[type=radio] {
    opacity:0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    top: ${({ size }) => size.top};
    left : ${({ size }) => size.left};
    width: 100%;
    height: 100%;
  }

  input[type=radio] + label::before{
    position: absolute;
    content: "";
    top: ${({ size }) => size.top};
    left : ${({ size }) => size.left};
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: linear-gradient(122deg, #e7e7f4, #c2c2cd);
    box-shadow:  2px 3px 8px #727279;
  }

  input[type=radio]:checked + label::before {
    background: radial-gradient(closest-side, #5959de, #17179d, #e7e7e4 85%);
    -webkit-transition: .7s;
    transition: .7s;
  }
`;

export default function RadioButton({
  value,
  name,
  check,
  id,
  change,
  size = { top: '0.0rem', left: '0.0rem' }
}: Props) {
  return (
    <>
      <RadioStyle
        size={size}
      >
        <input
          type="radio"
          value={value}
          name={name}
          id={id}
          onChange={change}
          checked={check}
        />
        <label htmlFor={name} />
      </RadioStyle>
    </>
  )
}