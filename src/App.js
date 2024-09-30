import off from './bulboff.jpeg'
import on from './bulbon.jpeg'
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [show,setShow]=useState(false)
  return (
    <div className="App">
     <h1>Turn on </h1>
     <button onClick={()=>setShow(true)}>On</button>
     <button onClick={()=>setShow(false)}>Off</button>

{show ? <On /> :<Off />}

     
    </div>
  );
}

export default App;

function On(){
  return(
    <>
 <img src={on}  />
    </>
    
  )
}

function Off(){
  return(
    <>
 <img src={off}  />
    </>
    
  )
}
