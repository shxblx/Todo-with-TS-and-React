import React from "react";

interface InputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<InputProps> = ({ inputValue, setInputValue }) => {
  return (
    <input
      className="w-full p-2 rounded-sm mb-2 border"
      type="text"
      placeholder="Enter item"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
