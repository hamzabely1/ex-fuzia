import React from 'react'
import { Link } from 'react-router-dom'
import Heder from './component/Heder'


const Reg = () => {

const save =() =>{




}




  return (
    <div>


<Heder/>




<form>
  <div class="mb-3">
    <label  for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>


  <Link to="/okay">
  
    <button onClick={save} type="submit" class="btn btn-primary">Submit</button>

  </Link>
</form>   






    </div>
  )
}

export default Reg