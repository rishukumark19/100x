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
  borderRadius: "10px",
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "200",
};
function PostComponent() {
  return <>hi there</>;
}

export default App;
