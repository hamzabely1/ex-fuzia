import React from 'react'
import Heder from './component/Heder'

const Article = () => {
    const piccola ={
        height:'200px'
    }
  return (
    <div>


<Heder/>

<div class="container-sm">

<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
      <img style={piccola} src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/04_12/gate_models_og_01.jpg'></img>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
      <img style={piccola} src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/04_12/gate_models_og_01.jpg'></img>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>





    </div>
  )
}

export default Article