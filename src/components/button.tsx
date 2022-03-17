import styled from 'styled-components';

const StyleButton = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #1033e3;
  box-shadow: 5px 5px 16px -2px rgb(175, 175, 175);
  width:214px;
  height:35px;
  font-size: 0.9rem;
  border-radius: 9px;
  border: none;
  color: white;
  cursor:pointer;
  margin: 0.8rem auto;

  &:hover{
    background: linear-gradient(70deg,#1033e3, #f74bf7);
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