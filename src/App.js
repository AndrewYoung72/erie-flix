import "./App.css";
import { useState } from "react";

const App = () => {
  // const name = "Andrew";
  // const isLoggedIn = true;
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {/* {isLoggedIn ? (
        <>
        <h1>Hello, {name}!</h1>
        </>
      ) : (
        <h1>You must be logged in!</h1>
      )} */}

{/* simple counter */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1 className="counter">{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <div>
        
      </div>
    </div>
  );
};

export default App;
