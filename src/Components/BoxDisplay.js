import React from 'react'
import "../App.css"

const BoxDisplay = (props) => {

  const { colorBoxArray } = props;

  return (
    <div id="container">
      {
        colorBoxArray.map((box, index) => (
          <div key={index} style={{
            backgroundColor: box.color,
            width: box.width + "px",
            height: box.height + "px",
            display: "inline-block",
            margin: "10px"
          }}>
          </div>
        ))
      }

    </div>
  );
}

export default BoxDisplay;
