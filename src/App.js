import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using the React and Redux</h4>
        <div>
          <a title="decrement" onClick={dispatch(decNumber())}>
            -
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a onClick={dispatch(incNumber())} title="increment">
            +
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
