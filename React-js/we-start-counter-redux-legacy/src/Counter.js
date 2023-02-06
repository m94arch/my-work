import { useDispatch, useSelector } from "react-redux";
import pageCss from "./Counter.module.css";

const Counter = () => {
  let counter = useSelector((state) => state.counter);
  let visible = useSelector((state) => state.visible);
  //لتوقل هذي 
  let dispatch = useDispatch();

  let incrementActionHandler = () => {
    dispatch({ type: "Increment" });
  };

  let decrementActionHandler = () => {
    dispatch({ type: "Decrement" });
  };

  let toggleActionHandler = () => {
    dispatch({ type: "Toggle" });
  };

  let incrementByValueActionHandler = () => {
    dispatch({ type: "IncrementByValue", incrementValue: 10 });
  };
  let MultiplyingActionHandler = () => {
    dispatch({ type: "Multiplying"});
    
  };
  let quotientActionHandler = () => {
    dispatch({ type: "quotient"});
    
  };


  

  return (
    <main className={pageCss.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={pageCss.value}>{counter}</div>}
      <div>
        <button onClick={incrementActionHandler}>Increment</button>
        <button onClick={incrementByValueActionHandler}>Increase by 10</button>
        <button onClick={MultiplyingActionHandler}>Multiplying</button>
        <button onClick={quotientActionHandler}>quotient</button>
        <button onClick={decrementActionHandler}>Decrement</button>
      </div>
      <button onClick={toggleActionHandler}>Toggle Counter</button>
    </main>
  );
;
  }
export default Counter;
