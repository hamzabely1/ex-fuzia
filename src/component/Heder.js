import React from 'react'
import { Link } from 'react-router-dom'

const Heder = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to="/home">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>

            </Link>
        </li>
        <li class="nav-item">


<Link to="/connexion">


          <a class="nav-link active" href="#">Connexion</a>
</Link>
        </li>
        
        <li class="nav-item">
            <Link to="/article">
                      <a class="nav-link active">Article</a>

            </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>








    </div>
  )
}

export default Heder