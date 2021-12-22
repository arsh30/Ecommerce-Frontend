import React from 'react'
// import { Jumbotron } from 'react-bootstrap';
// import {Jumbotron} from 'react-bootstrap/Jumbotron';
import Layout from '../../components/Layout';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import { Jumbotron } from 'react-bootstrap';

const Home = (props) => {
    return (
     
        <Layout>
            {/* <Jumbotron>
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron> */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="container-fluid"  style= {{margin: 'auto'}, {textAlign:'center'},{display:'block'}}>
                    <a className=" text-center navbar-brand" href="#"> <h1>Welcome to admin Dashboard </h1></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta tempora culpa repudiandae labore facere reiciendis perferendis repellendus et, veritatis quasi magni voluptatibus dolore doloribus at harum alias inventore nobis?</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
             {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul> 
            <form className="d-flex"> */}
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button> */}
            {/* </form> */}
          </div>
        </div>
      </nav> 


       </Layout>
    )
}



export default Home
