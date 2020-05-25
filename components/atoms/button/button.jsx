import React from "react";

const Button = ({children, href, onClick}) => {
    if (!href) return <button onClick={onClick}>{children}</button>;
    else return <a href={href}>{children}</a>;
}


export default Button;