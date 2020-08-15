import React, { useState } from "react";
import Top from "./components/Top";
import Main from "./components/Main";
import Bottom from "./components/Bottom";
import { converter, Alert } from "./components/app.utils";

// Main Operational Logic, Top Component.
function App() {
  // Toggles Bottom On/Off.
  const [bottom, setBottom] = useState<Boolean>(true);

  // Creates a Random price between 0 to 99,99.
  // Can be refactored to math.random() * 1000 for 5 digit prices.
  const price = parseFloat((Math.random() * 100).toFixed(2));
  const [toPay, setToPay] = useState(price);

  // A state that saves the user Input. Used as a Number[] for the ease of keypad implementation.
  const [paid, setPaid] = useState<number[]>([0]);

  // State for payment change.
  const [change, setChange] = useState<number>(0);

  // Controls the payment operation and stores the error or success messages.
  const [alert, setAlert] = useState<Alert>({ message: "", alert: "" });

  // I didn't want to let buttons stay inactive and dummy.
  // So I have implemented a visible/hidden toggle functionality for the bottom bar.
  const toggleBottom = (e: React.SyntheticEvent) => {
    bottom ? setBottom(false) : setBottom(true);
  };

  // Handle's the Keypad Buttons, stores it to "Paid" state.
  const handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    // If Delete button is pressed && paid array consists more than one digit;
    if (value === "<" && paid.length > 1) {
      // Removes the last array element from the array, stores it to the Paid State.
      setPaid(paid.slice(0, paid.length - 1));

      //... if only one element within Paid array =>  Paid = 0.
    } else if (target.value === "<" && paid.length === 1) {
      setPaid([0]);
    }

    // Initial state of paid is 0. We overwrite the state with the new value:
    else if (paid[0] === 0) {
      setPaid([parseInt(value)]);

      // If we have already numbers, we add the numbers until the array includes 5 elements (max: 999,99).
    } else if (paid.length < 5) {
      setPaid([...paid, parseInt(value)]);
    }
  };

  // Overwrites the Paid State directly.
  const handleQuickInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const value = parseInt(target.value);
    setPaid(Array.from(String(value), Number));
  };

  // Handles payment change after hitting Payment Button:
  // IF the amount is sufficent, sets Alert state to "completed" with a success message and sets the payment change state.
  // IF the amount is unsufficent, sets alert state to "error" with an error message and does not complete the transaction.
  const handlePayment = () => {
    if (converter(paid) > toPay) {
      setChange(parseFloat((converter(paid) - toPay).toFixed(2)));
      setAlert({
        alert: "completed",
        message: "Die Zahlung ist erfolgreich!",
      });
    } else {
      setAlert({
        alert: "error",
        message: `Zahlung fehlt € ${parseFloat(
          (toPay - converter(paid)).toFixed(2)
        )} und nicht möglich.`,
      });
    }
  };

  // Resets the application to the initial state, creates a new transaction price.
  const reset = () => {
    setAlert({ message: "", alert: "" });
    setChange(0);
    setToPay(price);
    setPaid([0]);
  };

  return (
    <div className="App flex flex-col h-screen">
      <Top toggleBottom={toggleBottom} />
      <Main toPay={toPay} paid={paid} change={change} alert={alert} />
      {bottom && (
        <Bottom
          onClick={handleInput}
          handlePayment={handlePayment}
          alert={alert}
          reset={reset}
          handleQuickInput={handleQuickInput}
        />
      )}
    </div>
  );
}

export default App;
