import React from "react";

interface PriceBox {
  amount: number;
  type: String;
  cypressData: String;
  toPay?: number;
}

// Displays prices, used for "zu Zahlen", "Gegeben" & "Rückgeld".
const PriceBox = ({ amount, type, cypressData, toPay }: PriceBox) => {
  return (
    <div
      className={
        "text-gray-600 lg:w-1/3 md:w-1/2 border mb-2 px-5 text-light antialiased pt-2 flex h-24 bg-gray-100"
      }
    >
      {/* "type" defines the title*/}
      <div className={"w-2/12"}>{type}</div>

      {/* Displays the actual amount. If the type is "Gegeben",
      it'll display orange text until it reaches the necessary price, and turns to teal.*/}
      <div
        data-cy={cypressData}
        className={`w-10/12 text-center text-5xl  font-light ${
          type === "Gegeben" && amount < toPay!
            ? "text-orange-600"
            : type === "Gegeben" && amount >= toPay!
            ? "text-teal-600"
            : "text-gray-800"
        }`}
      >
        € {amount}
      </div>
    </div>
  );
};

export default PriceBox;
