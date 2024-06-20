import "./App.css";
import Header from "./components/Header";
import MagicSpace from "./components/MagicSpace";
import { useState } from "react";
import Timer from "./components/Timer";
import { Form } from "./components/Form";

const vero = false;
const listArray = ["demon", "angel", "sky", "earth"];

const handleClick = () => {
  alert("Hello World!");
};
const handleMouseHover = (event) => {
  event.target.style.color = "red";
};

const button = <button onClick={handleClick}>Cliccami</button>;

const list = (
  <ul>
    <li id="ele-one" key="ele-1">
      primo elemento
    </li>
    <li key="ele-2" onMouseOver={handleMouseHover}>
      secondo elemento
    </li>
    <li>terzo elemento {10 * 10}</li>
    {!vero && <li>quarto elemento è {vero.toString()}</li>}
  </ul>
);

function App() {
  const [count, setCount] = useState(0);

  const encrease = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => setCount((prevCount) => prevCount - 1);

  const [username, setUsername] = useState("");

  const handleChange = ({ target }) => {
    setUsername(target.value);
  };

  return (
    <>
      <Header title="Il mio blog" />
      <h1>Test</h1>
      <p className="first-p">Monospace paragraph</p>
      {list}
      {button}
      <br />
      <p className="first-p">New list</p>
      {listArray.map((string) => {
        return <li>{string}</li>;
      })}
      <br />

      <p>Counter: {count}</p>
      <button onClick={encrease}>+</button>
      <button onClick={decrease}>-</button>

      <MagicSpace />

      <input type="text" value={username} onChange={handleChange} />
      <p>Your name is: {username}</p>

      <MagicSpace />

      <Timer />

      <MagicSpace />

      <Form />
    </>
  );
}

export default App;
