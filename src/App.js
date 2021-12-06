import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import {Link} from "react-router-dom";


class App extends Component{

    state = {
      username: '',
      password: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});

  }

  
  

  render (){
    return (

      // <div className="App">
      //   <Header/>
      //   <Contact name="Asim" email="de.asimhabib@gmail.com" />
      // </div>
    <div>
    <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")" }}>
    </div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Login to <strong>Discussion</strong></h3>
            <p class="mb-4">Join the most influential discussion forum of the web to get your problem solved instantly and have answers to your questions immediately!.</p>
            <form action="#" onSubmit={this.onSubmit}>
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control" placeholder="your-email@gmail.com" />
              </div>
              <div class="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" value={this.state.password} onChange={this.onChange} class="form-control" name="password" placeholder="Your Password" id="password"/>
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" />
                  <div class="control__indicator"></div>
                </label>
                <Link to="/signup" className="ml-auto">
                  <span class=""><a href="#" data-toggle="modal" data-target="#signupModal" class="forgot-pass ml-5">Sign Up</a></span> 
                </Link>
              </div>

              {/* Routing is commented intentionally because it will be opened after validating */}
              {/* <Link to="/home"> */}
                <input type="submit" value="Log In" class="btn btn-block btn-primary"/>
              {/* </Link> */}

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  </div>

    )
  }
}

export default App;
