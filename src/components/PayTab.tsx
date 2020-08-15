import React from "react";

interface PayTab {
  text: string;
  selected?: Boolean;
}

// Dummy Tabs for Payment Options. Currently shows as if "Bar" tab is selected.
const PayTab = ({ text }: PayTab) => {
  return (
    <div
      data-cy={text}
      style={
        text === "Bar"
          ? { backgroundColor: "rgb(61, 77, 77)" }
          : { backgroundColor: "rgb(170,170,176)" }
      }
      className={`${
        text === "Bar" ? "text-gray-400" : "text-gray-800"
      } items-center justify-center flex  h-full w-40`}
    >
      {text}
    </div>
  );
};

export default PayTab;
