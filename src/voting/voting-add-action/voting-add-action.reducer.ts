export enum AddActionVariants {
  manually = 'manually',
  template = 'template'
}

export enum AddActionStates {
  variant,
  next,
  prev,
  reset
}

export type InitialState = {
  currentVariant?: null | AddActionVariants;
  step: number;
};

export const initialState: InitialState = {
  step: 0
};

export const editInitialState: InitialState = {
  currentVariant: AddActionVariants.manually,
  step: 2
};

export type Action = {
  type: AddActionStates;
  payload?: AddActionVariants | null;
};

export const votingAddActionReducer = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case AddActionStates.variant:
      return {
        ...state,
        currentVariant: action.payload
      };

    case AddActionStates.next:
      return {
        ...state,
        step: state.step + 1
      };

    case AddActionStates.prev:
      return {
        ...state,
        step: state.step - 1
      };

    default:
      return initialState;
  }
};

export const setVariant = (variant: AddActionVariants | null): Action => ({
  type: AddActionStates.variant,
  payload: variant
});

export const nextStep = (): Action => ({
  type: AddActionStates.next
});

export const prevStep = (): Action => ({
  type: AddActionStates.prev
});

export const resetStep = (): Action => ({
  type: AddActionStates.reset
});
