import { useDispatch,useSelector } from "react-redux";
function App() {
  //4- Access Data from reducer using useSelector
  const data=useSelector(state=>state)

  //5- change data in reducer with dispatch
  const dispathCounter = useDispatch();
  
  return (
    <div className="App">
      <h3>Counter : {data.counter}</h3>
      <button onClick={()=>dispathCounter({type:'INCREMENT'})}>Increase</button>
      <button onClick={()=>dispathCounter({type:'DECREMENT'})}>Decrease</button>
      <button onClick={()=>dispathCounter({type:'RESET'})}>Reset</button>
    </div>
  );
}

export default App;
