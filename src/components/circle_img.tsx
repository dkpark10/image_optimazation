import styled from 'styled-components';

interface CircleImageProps {
  width: string;
  height: string;
  children?: JSX.Element;
}

const CircleImageWrapper = styled.div<Partial<CircleImageProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display:inline-block;
  border-radius: 50%;
  overflow: hidden;

  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`;

export default function CircleImage({
  width,
  height,
  children
}: CircleImageProps) {

  return (
    <>
      <CircleImageWrapper
        width={width}
        height={height}
      >
        {children}
      </CircleImageWrapper>
    </>
  )
}
