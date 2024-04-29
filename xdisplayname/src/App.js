import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [fullname, setfullname] =useState("");

function submit(e)
{
e.preventDefault();
setfullname(firstname + " "+ lastname)
}

  return (
    <form onSubmit={submit}>
      <h1>Full Name Display</h1>
      First Name : <input type='text' onChange={(e)=>{setFirstname(e.target.value)}} /><br />
      Last Name : <input type='text' onChange={(e)=>{setLastname(e.target.value)}}/><br />
      <button type='submit' >Submit</button>
      <p>Full name : {fullname}</p>
    </form>
  );
}

export default App;
