export const OPTIONS = 'options/OPTIONS' as const;

export interface OptionStatus {
  sprite: boolean;
  lazyLoading: boolean;
  webFormat: boolean;
  itemCount: number;
  newRender: boolean;
  imgSize:string;
};

interface OptionsAction {
  type: string;
  payload: OptionStatus
};

export const setOptimizeOptions = (payload: OptionStatus) => ({
  type: OPTIONS,
  payload
})

// 리듀서
export default function optionsReducer(state: OptionStatus = {
  sprite: false,
  lazyLoading: true,
  webFormat: false,
  itemCount: 27,
  newRender: true,
  imgSize:'100'
}, action: OptionsAction): OptionStatus {
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