import React from "react";

interface QuickBar {
  handleQuickInput: (e: React.SyntheticEvent) => void;
}

/*
 This unit was supposed to show possible payment options.
 Unfortunately I couldn't come up with a reasonable algorithm that would make life easier for the cashier.
 The other algorithms I came up with lacked consistency.
 I have implemented a banknote based system.
 I could also add a "Bar Exact" button, which is missing here since maximum 5 buttons are expected.
 Yet it could be implemented quite easily.
 */

const QuickBar = ({ handleQuickInput }: QuickBar) => {
  const suggestions = [100, 50, 20, 10, 5];

  return (
    <div data-cy="QuickBar" className={"w-1/4 space-y-1 flex flex-col"}>
      {suggestions.length > 1 &&
        suggestions.map((item) => (
          <button
            data-cy={`${item}Bill`}
            onClick={handleQuickInput}
            value={item}
            key={item.toString()}
            style={{ backgroundColor: "rgb(99,109,111)" }}
            className="h-full text-2xl hover:text-teal-500 text-gray-200 antialiased font-light"
          >
            € {item}
          </button>
        ))}
    </div>
  );
};

export default QuickBar;
