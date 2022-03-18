import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  boxShadow?: boolean;
  children: JSX.Element | JSX.Element[];
}

const ImageWrapper = styled.div<Partial<Props>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display:inline-block;
  overflow: hidden;
  border-radius: 5px;
 
  background: ${({ boxShadow }) => boxShadow === true
    ? 'linear-gradient(145deg, #bdbdc7 ,#e1e1ec)'
    : ''};

  box-shadow: ${({ boxShadow }) => boxShadow === true
    ? '2px 2px 6px #545458, -1px -1px 2px #fff'
    : ''};

  img, div {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`;

export default function CenterImage({
  width,
  height,
  boxShadow,
  children,
}: Props) {

  return (
    <>
      <ImageWrapper
        width={width}
        height={height}
        boxShadow={boxShadow}
      >
        {children}
      </ImageWrapper>
    </>
  )
}