import { ADD_TODO } from "./Actiontype";

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
