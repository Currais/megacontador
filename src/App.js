import { useState } from "react";
import ButtonUp from "./components/ButtonUp";
import ButtonDown from "./components/ButtonDown";
import ButtonReset from "./components/ButtonReset";
import "./components/App.css"

function App() {

  let [valorActual, setValorActual] = useState(0)  
    function clickUp() {         
    let up = valorActual + 1   
    setValorActual(up)
  }

  function clickDown() {               
    let down = valorActual - 1   
    setValorActual(down)
  }



  function reset() {
    setValorActual(0)
  }

  return (
    <main>
      <h1>COUNTER</h1>
      <p id="contador">{valorActual}</p>
      <div>
        <ButtonUp textUp="Up" operationUp={clickUp}/>
        <ButtonDown textDown="Down" operationDown={clickDown}/>
        <ButtonReset textReset="Reset" operationReset={reset}/>
        
      </div>
    </main>
  )

}

export default App;