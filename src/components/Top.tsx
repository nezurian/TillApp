import React, { useState } from "react";
import Button from "./Button";
import Tab from "./Tab";

interface Top {
  toggleBottom: (e: React.SyntheticEvent) => void;
}

// Topbar, consisting few buttons and houses Transaction tabs. Works as a dummy feature, doesn't hold a logic.
const Top = ({ toggleBottom }: Top) => {
  const [tab, setTab] = useState<Tab[]>([]); // list of opened tabs;

  const btnList: Button[] = [
    { cypressTag: "ButtonLock", icon: "https", name: "Lock" },
    {
      cypressTag: "ButtonKeyPad",
      icon: "dialpad",
      name: "KeyPad",
      onClick: toggleBottom,
    },
    { cypressTag: "ButtonMenu", icon: "menu", name: "Menu" },
  ];

  // handles creation of a new tab.
  const addTab = (e: React.SyntheticEvent): void => {
    setTab([
      ...tab,
      {
        name: `Verkauf${tab.length + 1}`,
        count: tab.length + 1,
        cypressTag: `Tab${tab.length + 1}`,
        onClick: addTab,
      },
    ]);
  };

  // handles removing a tab from the list of tabs.
  const removeTab = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLButtonElement;
    const selected: Tab[] = tab.filter((tab) => tab.name !== target.name);
    setTab(selected);
  };

  return (
    <div
      data-cy={"Topbar"}
      className={"flex flex-row pt-3"}
      style={{ backgroundColor: "rgb(61, 77, 77)" }}
    >
      <div className={"flex flex-row ml-16 w-1/3"}>
        {btnList.map((button) => (
          <Button
            key={button.name}
            cypressTag={button.cypressTag}
            icon={button.icon}
            name={button.name}
            onClick={button.onClick}
          />
        ))}
      </div>
      <div className={"flex flex-row justify-end w-2/3"}>
        {tab.map((tab) => (
          <Tab
            cypressTag={`${tab.cypressTag}`}
            count={tab.count}
            name={tab.name}
            onClick={removeTab}
          />
        ))}

        <Button
          onClick={addTab}
          cypressTag={"ButtonAdd"}
          icon={"add"}
          name={"Add"}
        />
      </div>
    </div>
  );
};

export default Top;
