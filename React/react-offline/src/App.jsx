import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostComponent />
    </>
  );
}
const style = {
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  width: 200,
  display: "flex",
};
function PostComponent() {
  return (
    <>
      <div style={style}>
        <img
          src={"https://picsum.photos/400/300"}
          alt="Hero"
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10 }}>
          <h4>100xDevs</h4>
          <div>28,888 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        want to know how to win big? Check this out.
      </div>
    </>
  );
}

export default App;
