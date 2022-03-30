import styled from 'styled-components';

const RadioStyle = styled.input.attrs({ type: 'radio' })`
  .option-row-container{
    display: flex;
    position: relative;
    align-items: center;
    border: 2px solid red;
    height: 52px;
    width:52px;
}

.option-row-container input[type='radio'] {
  visibility: hidden;
}

.option-row-container input[type='radio'] + label::before{
  position: absolute;
  content: "";
  top: 0.9rem;
  background-color:yellow;
  left : 0.9rem;
  cursor: pointer;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 100%;
  border: 4px solid #b1b1b1;
}

.option-row-container input[type='radio']:checked + label::before {
  background-color: green;
  border: 4px solid blue;
}

`;

interface Props {
  value?: string;
  name?: string;
  check?: boolean;
  change?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RadioButton({
  value,
  name,
  check,
  change
}: Props) {
  return (
    <>
        {/* <input
          value={value}
          name={name}
          type="radio"
          checked={check}
          onChange={change}
        /> */}
    </>
  )
}