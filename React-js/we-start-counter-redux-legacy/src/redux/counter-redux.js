import { createStore } from "redux";

let initialState = { counter: 0, visible: true };
let reducerFunction = (state = initialState, action) => {
  if (action.type == "Increment") {
    state = {
      counter: state.counter + 1,
      visible: state.visible,
    };
  }
  if (action.type == "Decrement") {
    state = {
      counter: state.counter - 1,
      visible: state.visible,
    };
  }
  if (action.type == "Toggle") {
    state = {
      counter: state.counter,
      visible: !state.visible,
    };
  }

  if (action.type == "IncrementByValue") {
    state = {
      counter: state.counter + action.incrementValue,
      visible: state.visible,
    };
  }
  if (action.type == "Multiplying") {
    state = {
      counter: state.counter *10,
      visible: state.visible,
    };
  }
  if (action.type == "quotient") {
    state = {
      counter: state.counter /10,
      visible: state.visible,
    };
  }
  return state;
};

export const counterStore = createStore(reducerFunction);

/**
 * Redux:
 *  - Store with one parameter
 *    - parameter: reducerFunction, has two Parameters:
 *      - 1) state, must have a default value
 *      - 2) action, 
 *            - contains the sent data from UI
 *            - contains the type of action (dispatched) from UI
 * 
 *  - reducuer function:
 *    - contains two parameters
 *      1) state
 *      2) action
 *          - contains the type of dispatched action from UI
 *    - when defined must returen a defaut state
 * 
 *  - useDispatch
 *    - The hook used to create a communication request between UI and Redux Reducer function
 *    - dispatch hook must have an action {type: value} parameter
 *    - when a type sent to reducer function by using dispatch from UI,
 *      - Received action type must be defined in reducer function
 *      - if defined, it will affect the reducer function state
 */
