import React from "react";

function Boxes(props) {


  return (
    <div>
      <button onClick={props.onHandleClick} className="btn cust-btn ">
        {props.value}
      </button>
    </div>
  );
}

export default Boxes;
