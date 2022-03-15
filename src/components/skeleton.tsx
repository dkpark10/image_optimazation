import styled from 'styled-components';

const SkeletonStyle = styled.div`
  @keyframes skeleton-gradient {
  0% {
      background-color: rgba(165, 165, 165, 0.24);
    }
  50% {
      background-color: rgba(138, 138, 138, 0.5);
    }
  100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }

  .skeleton-item {
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }
`;

export default function SkeletionUI() {
  return (
    <>
      <SkeletonStyle>
        <div className='skeleton-item' style={{ width: '100%', height: '100%' }} />
      </SkeletonStyle>
    </>
  )
}