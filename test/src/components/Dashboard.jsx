import React from "react";

export default function Dashboard(props) {
  return (
    <div>
            <button onClick={props.addStrike}>Strike</button>
            <button onClick={props.addBall}>Ball</button>
            <button onClick={props.addFoul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
          
    </div>
  );
}
