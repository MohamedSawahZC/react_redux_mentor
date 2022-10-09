import { useDispatch, useSelector } from "react-redux";
function App() {
  //4- Access Data from reducer using useSelector
  const data = useSelector((state) => state.Counter.counter);
  const isLog = useSelector((state) => state.Auth.isLog);
  console.log(isLog);
  //5- change data in reducer with dispatch
  const dispathCounter = useDispatch();

  return (
    <div className="App">
      <h3>Counter : {data}</h3>
      <h3>Log Status : {`${isLog}`}</h3>
      <button onClick={() => dispathCounter({ type: "I NCREMENT" })}>
        Increase
      </button>
      <button onClick={() => dispathCounter({ type: "DECREMENT" })}>
        Decrease
      </button>
      <button onClick={() => dispathCounter({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispathCounter({ type: "IsLogin" })}>
        Make User
      </button>
      <button onClick={() => dispathCounter({ type: "NotLogin" })}>
        Not User
      </button>
    </div>
  );
}

export default App;
