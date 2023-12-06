import React from "react";
import './css/button.css';

const Button = ({value, clicks}) => {
    // const [value , setValue ] = useState(null); //useState(Array(9).fill(null));
    
    // const handleClicks = () => {
    //     setValue("X");
    // }
    return (
        <button className="btn" onClick={clicks} >{value}</button>
    );
}

export default Button;