import { BurgerSwapPayback, BurgerSwapTransit } from './common';

type State = {
  paybackList: BurgerSwapPayback[];
  transitList: BurgerSwapTransit[];
  loading: boolean;
};

export const initialState: State = {
  paybackList: [],
  transitList: [],
  loading: false
};

enum Actions {
  SET_PAYBACK_LIST,
  SET_TRANSIT_LIST,
  SET_LOADING
}

type Action = {
  type: Actions;
  paybackList?: State['paybackList'];
  transitList?: State['transitList'];
  loading?: State['loading'];
};

export const bridgeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.SET_PAYBACK_LIST:
      return {
        ...state,
        paybackList: action.paybackList ?? []
      };
    case Actions.SET_TRANSIT_LIST:
      return {
        ...state,
        transitList: action.transitList ?? []
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: action.loading ?? false
      };
    default:
      return state;
  }
};

export const setPaybackList = (paybackList: State['paybackList']) => ({
  type: Actions.SET_PAYBACK_LIST,
  paybackList
});

export const setTransitList = (transitList: State['transitList']) => ({
  type: Actions.SET_TRANSIT_LIST,
  transitList
});

export const setLoading = (loading: boolean) => ({
  type: Actions.SET_LOADING,
  loading
});
