import React from "react";
import '../Game.css';


const onClick = (id) => {
    alert('on click : ' + id);
}

const GameCircle = ({ id, children }) => {

    return (
        <div className={`gameCircle ${id % 2 === 0 ? 'odd' : 'even'}`} onClick={() => { onClick(id) }}>
            {children}
        </div >
    )
}


export default GameCircle;