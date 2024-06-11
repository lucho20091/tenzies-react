import React from "react"

export default function Die(props) {
    const green = props.isHeld ? "green-class" : ""
    return (
        <div className={`die-face ${green}`} 
            onClick={()=> props.holdDice(props.id)}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}