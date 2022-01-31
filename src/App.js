import React, {useState} from "react";
import "./App.css";
//never mutate/update any state variable directly
function App(){
  const [count, setCount] = useState(0); //count is variable, setCount is mtd
  // super setSuper icetea setIcetea


  return (
    <div className="App">
      <header>Counter App using State/Hooks</header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => count > 9 ? "" : setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => count < 1  ? "" : setCount(count - 1)}>Decrease Counter</button>
    </div>
  )
}

export default App;