export const OPTIONS = 'options/OPTIONS' as const;

export interface OptionStatus {
  sprite: boolean;
  lazyLoading: boolean;
  webFormat: boolean;
  itemCount: number;
};

interface OptionsAction {
  type: string;
  payload: OptionStatus
};

const initialState: OptionStatus = {
  sprite: true,
  lazyLoading: true,
  webFormat: false,
  itemCount: 45
};

export const setOptimizeOptions = (payload: OptionStatus) => ({
  type: OPTIONS,
  payload
})

// 리듀서
export default function optionsReducer(state: OptionStatus = initialState, action: OptionsAction): OptionStatus {
  switch (action.type) {
    case OPTIONS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}