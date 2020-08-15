import React from "react"


interface Button {
    cypressTag: String;
    icon: String;
    name: string
    onClick?: (e: React.SyntheticEvent) => void
}

// A Reusable button for Topbar.
const Button = ({ cypressTag, icon, name, onClick }: Button) => {
    return (
        <button name={name} data-cy={cypressTag} onClick={onClick} className={"px-4 py-1 hover:text-teal-500 text-gray-300"}>
            <i className={"material-icons"}>{icon}</i>
        </button>
    );
};

export default Button