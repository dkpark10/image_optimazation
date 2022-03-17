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
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  // 실제 버튼
  .onoff-switch:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    bottom: 2px;
    left: 4px;
    background-color: #fff;
    -webkit-transition: .5s;
    transition: .4s;
    border-radius:20px;
  }

  .toggle-wrapper input:checked + .onoff-switch {
    background-color: #1033e3;
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ToggleButton({
  id,
  name,
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
          />
          <span className='onoff-switch' />
        </label>
      </ToggleStyle>
    </>
  )
}