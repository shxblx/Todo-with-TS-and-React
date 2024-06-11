import { useState } from "react";
import "./App.css";
import { Input } from "./Components/Input";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center font-sans">
      <div className="w-[350px] p-5 rounded-lg shadow-lg">
        <h1 className="text-slate-600 text-5xl font-bold mb-5">TODO</h1>
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <button
            type="submit"
            className="w-full bg-slate-600 p-2 rounded-sm hover:bg-slate-700"
          >
            Add
          </button>
        </form>
        <div className="h-52 overflow-y-auto custom-scrollbar">
          {items.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-white bg-slate-600 border border-slate-600 px-2 mb-2 py-2 rounded-sm"
            >
              <p className="font-medium">{data}</p>
              <button onClick={() => handleDelete(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white-600 hover:text-slate-300"
                >
                  <path
                    d="M3 6h18v2H3zM5 8h14v14H5V8zm4 0v14h2V8H9zm4 0v14h2V8h-2z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
