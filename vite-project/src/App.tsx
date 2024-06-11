import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] flex-col justify-center items-center">
      <div className="w=[350px]">
        <form className="mb-5">
          <input className="w-full p-2 rounded-sm mb-2" type="text" />
          <button type="submit" className="bg-gray-700 w-full p-2">Add</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default App;
