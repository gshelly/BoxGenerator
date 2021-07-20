import React, { useState } from 'react'
import "../App.css"

const BoxGenerator = (props) => {

  const [color, setColor] = useState("")
  const [height, setHeight] = useState("100")
  const [width, setWidth] = useState("100")
  const { colorBoxArray, setColorBoxArray } = props

  const addBox = (e) => {
    e.preventDefault()
    setColorBoxArray([...colorBoxArray,
    {
      color: color,
      height: height,
      width: width
    }])
    setColor("")
  }

  return (
    <form onSubmit={addBox} >
      Color <input className="inputStyle" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      Height in px <input className="inputStyle" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      Width in px<input className="inputStyle" type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
      <input value="ADD" type="submit" />
    </form>
  );
}
export default BoxGenerator;