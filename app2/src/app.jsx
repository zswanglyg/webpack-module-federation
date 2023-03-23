import React, { useEffect } from "react";

const App = () => {
  useEffect( () => {
    console.log('panda')
  }, [] )
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 2</h1>
    </div>
  )
}

export default App;