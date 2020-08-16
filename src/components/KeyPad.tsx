import React from "react";

interface KeyPad {
  onClick: (e: React.SyntheticEvent) => void;
}

// Keypad, shown in Bottom Component. Clicking a button triggers handleInput method on App.tsx
const KeyPad = ({ onClick }: KeyPad) => {
  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", ""];

  return (
    <div data-cy="KeyPad" className={"w-1/2 h-full grid grid-cols-3"}>
      {keys.map((key) => (
        <button
          data-cy={key === "<" ? "ButtonDel" : `Button${key}`}
          key={key}
          onClick={onClick}
          value={key}
          style={{ backgroundColor: "rgb(99,109,111)" }}
          className="h-auto m-1 text-4xl hover:text-teal-500 text-gray-200 antialiased font-light"
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;
