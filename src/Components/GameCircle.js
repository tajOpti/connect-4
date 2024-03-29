import React from "react";
import '../Game.css';


const onClick = (id) => {
    alert('on click : ' + id);
}

const GameCircle = ({ id, color, children }) => {

    const style = {
        backgroundColor: color
    }
    return (
        <div className="gameCircle" style={style} onClick={() => { onClick(id) }}>
            {children}
        </div>
    )
}


export default GameCircle;