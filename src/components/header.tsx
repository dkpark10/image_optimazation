import { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import OptionModal from './option_modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/index';
import { setShowModal } from '../reducer/show_modal';

const HeaderWrapper = styled.div`
  text-align: center;
`;

export default function Header() {

  const show = useSelector((root: RootState) => root.modal.show);
  const dispatch = useDispatch();

  return (
    <>
      <OptionModal display={show} />
      <HeaderWrapper>
        <Button onClick={() => dispatch(setShowModal(''))}>
          <span>최적화 옵션</span>
        </Button>
      </HeaderWrapper>
    </>
  )
}