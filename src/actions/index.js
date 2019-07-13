export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const REMOVE_TODO ="REMOVE_TODO";

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: item
  };
};

export const completeTodo = id => {
  return {
    type: TOGGLE_COMPLETE,
    id
  };
};
export const removeTodo=item=>{
  return{
    type:REMOVE_TODO,
    payload:item
  }
}