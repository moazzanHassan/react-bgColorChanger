// import { useState } from "react"


// function App() {
  
//   const [color,setColor] = useState("green")

import { useState, useEffect } from "react";

function App() {
  // Get the initial color from localStorage, or default to "green"
  const [color, setColor] = useState(() => localStorage.getItem("backgroundColor") || "green");

  // Save the color to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <div className="w-full h-screen transition-all duration-500"  style={{backgroundColor:color}}>

    <div className="rounded-2xl translate-x-2/4 bg-slate-100 absolute bottom-10  left-44 px-2 py-2 flex gap-5 justify-center ">
      <button
      onClick={()=>setColor("red")}
      className="bg-red-600 px-10 py-1 text-white rounded-xl">Red</button>
      <button
      onClick={()=>setColor("green")}
      className="bg-green-600 px-10 py-1 text-white rounded-xl">Green</button>
      <button
      onClick={()=>setColor("yellow")}
      className="bg-yellow-600 px-10 py-1 text-white rounded-xl">Yellow</button>
      <button
      onClick={()=>setColor("pink")}
      className="bg-pink-600 px-10 py-1 text-white rounded-xl">Pink</button>
    </div>
    </div>
  )
}

export default App
