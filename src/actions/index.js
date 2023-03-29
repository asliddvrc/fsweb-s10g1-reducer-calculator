export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_R = "MEMORY_R";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const changeOperation = (number) => {
  return { type: CHANGE_OPERATION, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryPlus = (item) => {
  return { type: MEMORY_PLUS, payload: item };
};

export const memoryR = (number) => {
  return { type: MEMORY_R, payload: number };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
