export const MODALSHOW = 'modal/SHOW' as const;

export interface ModalState {
  show: string;
};

interface ModalAction {
  type: string;
};

const initialState: ModalState = {
  show: 'none'
};

export const setShowModal = (show: string) => ({
  type: MODALSHOW,
  show
})

// 리듀서
export default function counterReducer(state: ModalState = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case MODALSHOW:
      return {
        ...state,
        show: state.show === '' ? 'none' : ''
      };
    default:
      return state;
  }
}