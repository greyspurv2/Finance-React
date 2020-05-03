import React from "react";


const LoginButton = props => {
    return (
        <button onClick = { props.onClick }
        style = {
            {
                font: "inherit",
                cursor: "pointer",
                border: "1px solid blue",
                background: "#blue grey",
                color: "white",
                padding: "0.5rem 2rem"

            }
        } > { props.children }
        Login
        </button>
    );
};


export default LoginButton;