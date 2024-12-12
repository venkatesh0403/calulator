import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleUndo = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 w-80">
      
        <h1 className="text-2xl font-bold text-center mb-4">React Simple Calculator</h1>
        
      
        <input
          type="text"
          className="w-full p-2 text-right border-b border-gray-300 mb-4"
          value={input}
          readOnly
        />
        
        
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <button
              key={item}
              onClick={() => item === "=" ? handleCalculate() : handleClick(item)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
          <button onClick={handleUndo} className="col-span-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
            Undo
          </button>
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;