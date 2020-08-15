import React from "react";
import PayTab from "./PayTab";
import KeyPad from "./KeyPad";
import QuickBar from "./QuickBar";
import { Alert } from "./app.utils";

interface Bottom {
  onClick: (e: React.SyntheticEvent) => void;
  handlePayment: () => void;
  alert: Alert;
  reset: () => void;
  handleQuickInput: (e: React.SyntheticEvent) => void;
}

// Shows Payment Options Tab, Suggestion Bar & Keypad.
const Bottom = ({
  onClick,
  handlePayment,
  alert,
  reset,
  handleQuickInput,
}: Bottom) => {
  // Tabs to show as Payment Options.
  const tabs = ["Bar", "EC", "Kreditkarte", "Gutschein", "Sonstige"];

  return (
    <div
      data-cy={"Bottom"}
      className={" relative flex flex-col"}
      style={{ backgroundColor: "rgb(61, 77, 77)" }}
    >
      {/* Payment Options Section*/}
      <div
        data-cy={"PayTab"}
        className={"h-12 flex flex-row justify-center space-x-4"}
        style={{ backgroundColor: "rgb(219,219,222)" }}
      >
        {tabs.map((tab) => (
          <PayTab key={tab} text={tab} />
        ))}
      </div>

      {/* Quick Suggestions Bar & Keypad */}
      <div className={"flex w-full space-x-4 py-2 justify-center flex-row"}>
        <QuickBar handleQuickInput={handleQuickInput} />
        <KeyPad onClick={onClick} />
      </div>

      {/*If payment is completed, displays a Close button to renew the operation. This button resets the app.*/}
      {alert.alert === "completed" ? (
        <button
            data-cy={"Fertig"}
          onClick={reset}
          className={
            "absolute bottom-0 right-0 bg-teal-500 text-gray-200 border-2 mr-40 mb-3 w-40 h-16"
          }
        >
          Fertig
        </button>
      ) : (
        /* Tries to complete the transaction. Transaction will not be completed until the given amount is sufficent. */
        <button
            data-cy={"Zahlen"}
          onClick={handlePayment}
          className={
            "absolute bottom-0 right-0 bg-teal-500 text-gray-200 border-2 mr-40 mb-3 w-40 h-16"
          }
        >
          Zahlen
        </button>
      )}
    </div>
  );
};

export default Bottom;
