import React from "react";


const onClick = () => {
    alert('on click');
}

const GameCircle = ({ id, children }) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}


export default GameCircle;