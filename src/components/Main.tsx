import React from "react";
import PriceBox from "./PriceBox";
import { converter, Alert } from "./app.utils";

interface Main {
  toPay: number;
  paid: number[];
  change: number;
  alert: Alert;
}
// Center View; displays Zu Zahlen and Gegeben numbers.
const Main = ({ paid, toPay, change, alert }: Main) => {
  return (
    <div
      data-cy={"Main"}
      className={"w-full h-full flex flex-col items-center justify-center"}
    >
      {/* If the operation is completed, displays change and a success message*/}
      {alert.alert === "completed" ? (
        <>
          <PriceBox cypressData={"Change"} type="Rückgeld" amount={change} />
          <p data-cy="Success" className={"font-hairline flex flex-row space-x-4 text-teal-500"}>
            <i className={"material-icons"}>check_circle</i>
            {alert.message}
          </p>
        </>
      ) : (
          /* If operation is in progress displays "zu Zahlen" & "Gegeben", */
        <>
          <PriceBox cypressData={"ToPay"} type="zu Zahlen" amount={toPay} />
          <PriceBox
            toPay={toPay}
            cypressData={"Paid"}
            type="Gegeben"
            amount={converter(paid)}
          />

          {/* Alerts the cashier that the amount given is not sufficent to pay.*/}
          {alert.alert === "error" && (
            <p data-cy={"Failure"} className={"font-hairline flex flex-row space-x-4 text-red-500"}>
              <i className={"material-icons"}>report_problem</i>
              {alert.message}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Main;
