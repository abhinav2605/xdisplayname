import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [fullname, setfullname] =useState("");

function submit()
{
  setfullname(firstname + " " + lastname);
}

  return (
    <div>
      <h1>Full Name Display</h1>
      First Name : <input onChange={(e)=>{setFirstname(e.target.value)}} /><br />
      Last Name : <input onChange={(e)=>{setLastname(e.target.value)}}/><br />
      <button onClick={submit}>Submit</button>
      <p>Full name : {fullname}</p>
    </div>
  );
}

export default App;
