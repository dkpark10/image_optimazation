import styled from 'styled-components';

interface ImageProps {
  width: string;
  height: string;
  children: JSX.Element;
}

const ImageWrapper = styled.div<Partial<ImageProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display:inline-block;
  overflow: hidden;
  
  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`;

export default function CenterImage({
  width,
  height,
  children,
}: ImageProps) {

  return (
    <>
      <ImageWrapper
        width={width}
        height={height}
      >
        {children}
      </ImageWrapper>
    </>
  )
}
