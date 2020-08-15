import React from "react";

interface Tab {
  cypressTag: String;
  count: Number;
  name: string;
  onClick: (e: React.SyntheticEvent) => void;
}

// Tab component for the TopBar. Is currently Dummy. Can be added or removed via + or x buttons.
const Tab = ({ cypressTag, count, name, onClick }: Tab) => {
  return (
    <button
      data-cy={cypressTag}
      className={" mr-2 pl-2 pr-8 relative text-gray-700 font-light"}
      style={{ backgroundColor: "rgb(219,219,222)" }}
    >
      <div className={"flex flex-row items-center justify-center space-x-4"}>
        <div
          data-cy="Icon"
          className={
            "w-8 h-8 bg-gray-600 text-gray-200 rounded-full flex items-center justify-center"
          }
        >
          C
        </div>
        <div className={"flex flex-col text-left"}>
          <p className={"text-sm text-gray-700 antialiased"}> {name}</p>
          <p className={"text-sm text-gray-700 antialiased"}> {count}</p>
        </div>
      </div>
      <button
        name={name}
        onClick={onClick}
        data-cy="Close-Tab"
        className={"absolute top-0 right-0 pr-2 hover:text-red-700"}
      >
        x
      </button>
    </button>
  );
};

export default Tab;
