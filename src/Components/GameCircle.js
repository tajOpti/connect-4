import React from "react";
import '../Game.css';



const GameCircle = ({ id, children, className, onCircleClicked }) => {

    return (
        <div className={`gameCircle ${id % 2 === 0 ? className : className}`} onClick={() => { onCircleClicked(id) }}>
            {children}
        </div >
    )
}


export default GameCircle;