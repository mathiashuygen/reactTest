import { useState } from "react";
import "./Message.css";
const colors = [
  { title: "blue", id: "#7CB9E8" },
  { title: "indigo", id: "#4B0082" },
  { title: "gold", id: "#FEBE10" },
];

function Message() {
  const [colorCount, setColor] = useState(0);

  function MyButton() {
    function handleClick() {
      const newColorCount = (colorCount + 1) % colors.length;
      setColor(newColorCount);
    }
    return (
      <button
        className="stylerButton"
        style={{
          backgroundColor: colors[colorCount].id,
          padding: "10px 20px",
          color: "#000",
        }}
        onClick={handleClick}
      >
        {" "}
        Click me uwu
      </button>
    );
  }

  return (
    <div>
      <h1>Current Color: {colors[colorCount].title}</h1>
      <MyButton />
    </div>
  );
}

export default Message;
