import React from 'react'
import { Link } from 'react-router-dom'

const Okay = () => {
  return (
    <div>

<p class="fs-1">Aggiute un artcile</p>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nom</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">image</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>


 <Link to='/Home'>
 
   <button type="submit" class="btn btn-primary">Submit</button>

 
 </Link>
</form>


    </div>
  )
}

export default Okay