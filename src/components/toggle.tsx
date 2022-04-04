import styled from 'styled-components';

const ToggleStyle = styled.span`

  .toggle-wrapper {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 18px;
    margin: 8px;
    // 실제 인풋박스 숨기기
    text-align: center;
  }

  // 버튼 배경
  .onoff-switch {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius:20px;
    -webkit-transition: .4s;
    transition: .4s;
    background: linear-gradient(180deg, #b4b4c0, #d8d8e4);
    box-shadow:  1px 4px 18px #727279;
  }

  // 실제 버튼
  .onoff-switch:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    bottom: 2px;
    left: 4px;
    -webkit-transition: .5s;
    transition: .4s;
    border-radius:20px;
    background: linear-gradient(360deg, #d5d5da, #fefeff);
  }

  .toggle-wrapper input:checked + .onoff-switch {
    background: linear-gradient(180deg, #17179d, #5959de);
  }

  .toggle-wrapper input:checked + .onoff-switch:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }
`;

interface Props {
  id: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ToggleButton({
  id,
  name,
  checked,
  disabled = false,
  onChange
}: Props) {

  return (
    <>
      <ToggleStyle>
        <label className='toggle-wrapper'>
          <input
            id={id}
            name={name}
            type='checkbox'
            onChange={onChange}
            checked={checked}
            disabled={disabled}
          />
          <span className='onoff-switch' />
        </label>
      </ToggleStyle>
    </>
  )
}