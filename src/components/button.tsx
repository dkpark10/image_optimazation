import styled from 'styled-components';

const StyleButton = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  width:214px;
  height:35px;
  font-size: 0.9rem;
  border-radius: 9px;
  border: none;
  color: black;
  cursor:pointer;
  margin: 0.8rem auto;

  background: linear-gradient(145deg, #e7e7f4, #c2c2cd);
  box-shadow:  5px 8px 19px #59595d,
             -5px -5px 16px #ffffff;


  &:hover{
    background: linear-gradient(315deg, #e7e7f4, #c2c2cd);
    box-shadow:  -5px -5px 16px #59595d,
             5px 5px 16px #ffffff;

  }
`;

interface Props {
  children: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ 
  children,
  onClick }: Props) {
    
  return (
    <>
      <StyleButton onClick={onClick}>
        {children}
      </StyleButton>
    </>
  )
}