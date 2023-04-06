import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

  const [firstName,setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [user,setUser] = useState([]);
  console.log(user);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName && email){
        const users = {
          firstName,
          email,
        }
        setUser((user)=>{
          return [...user,users]
         })
         setFirstName("");
         setEmail("");
    }
  }
  return (
  <>  
    <form>
      <div className = "form-group">
       <input  
        type="text" 
        name="firstname" 
        value={firstName} 
        onChange={(e)=> setFirstName(e.target.value)} 
        placeholder='First Name'/>
      </div>  
      <div className = "form-group">
        <input 
        type="text" 
        name="email" 
        placeholder='EMAIL' 
        value={email} 
        onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <div className ="form-group">
        <button type="submit" onClick={handleSubmit} className='btn'>enter</button>
      </div>
    </form>
    {
      user.map((item,index)=>{
        return(
        <div key={index}>
          <h2>{item.firstName}</h2>
          <h2>{item.email}</h2>
        </div> 
        ) 
      })
    }
  </>  
  );
}
