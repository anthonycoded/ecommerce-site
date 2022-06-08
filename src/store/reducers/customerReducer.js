const initialState = {};

const variable = "variable";

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case variable:
      return action.payload;

    default:
      return state;
  }
};
