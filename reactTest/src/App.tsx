import Login from "./components/LoginMenu/login";
import "./App.css";

function App() {
  /*
  const name = 'Mathias';
  return ( <div className = 'backgroundContainer'> <div> <ListGroup/> </div><div><Message/> </div> </div>			
);
*/
  return (
    <div className="appDiv">
      <div className="navBarSimul"></div>
      <div className="logInPanel">
        <Login />
      </div>
    </div>
  );
}

export default App;
