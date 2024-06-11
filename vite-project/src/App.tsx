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
          <button type="submit" className="bg-gray-700 w-full p-2">
            Add
          </button>
        </form>
        <div className="h-52 overflow-y-auto">
          <div className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2">
            <p>JS</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M3 6h18v2H3zM5 8h14v14H5V8zm4 2v10h2V10H9zm4 0v10h2V10h-2z"
                  fill="currentColor"
                />
                <path d="M8 4h8v2H8z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
