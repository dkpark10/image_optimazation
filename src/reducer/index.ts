import { combineReducers } from 'redux';
import showModalReducer, { ModalState } from './show_modal';
import optionsReducer, { OptionStatus } from './options';

export interface RootState {
  modal : ModalState,
  options: OptionStatus
}

export default combineReducers<RootState>({
  modal: showModalReducer,
  options: optionsReducer
});
