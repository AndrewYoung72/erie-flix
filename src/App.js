import { useEffect } from "react";
import "./App.css";
// import { useState, useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=8a73a469";

// 8a73a469

const App = () => {
  // const name = "Andrew";
  // const isLoggedIn = true;
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   setCounter(100);
  // },[])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
  };

  useEffect(() => {
    searchMovies("John Wick");
  }, [])
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
      {/* <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1 className="counter">{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <div>
        
      </div> */}
      <h1>Hello There!</h1>




    </div>
  );
};

export default App;
