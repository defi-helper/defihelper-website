export const initialTableState = {
  headerColsCount: 0,
  bodyColsCount: 0
};

export enum TableActions {
  setHeadColsCount,
  setBodyColsCount
}

export const tableReducer = (
  state: typeof initialTableState,
  action: { type: TableActions; payload: number }
) => {
  switch (action.type) {
    case TableActions.setBodyColsCount:
      return {
        ...state,
        bodyColsCount: action.payload
      };

    case TableActions.setHeadColsCount:
      return {
        ...state,
        headerColsCount: action.payload
      };

    default:
      return initialTableState;
  }
};

export const setBodyColsCount = (payload: number) => ({
  type: TableActions.setBodyColsCount,
  payload
});

export const setHeadColsCount = (payload: number) => ({
  type: TableActions.setHeadColsCount,
  payload
});
