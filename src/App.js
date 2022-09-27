import "./App.css";

const App = () => {
  const name = "Andrew";
  const isLoggedIn = true;
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
        <h1>Hello, {name}!</h1>
        </>
      ) : (
        <h1>You must be logged in!</h1>
      )}
    </div>
  );
};

export default App;
