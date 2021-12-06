import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class SignUp extends Component {

  state = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    confirmpassword : '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    var firstname = this.state.firstname;
    var lastname = this.state.lastname;
    var email = this.state.email;
    var username = this.state.username;
    var password = this.state.password;
    var confirmpassword = this.state.confirmpassword;

    // console.log(firstname);
    // console.log(lastname);
    // console.log(username);
    // console.log(email);
    // console.log(password);
    // console.log(confirmpassword);
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

    render() {
        return (
    
    <div class="d-lg-flex half">
        <div class="bg" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")" }}></div>
        
        <div className="content m-0 p-0">
            <div className="container ml-sm-5 mt-5">
                <h4 className="text-center ml-sm-5">Sign Up to<strong> Discussion Forums</strong></h4>

                
                <form action="#" onSubmit={this.onSubmit} class="mt-5">

                    <div class="form-row mb-3">
                        <div class="col m-0 p-0 ml-sm-5">
                          <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} class="form-control" id="firstname" placeholder="First name"></input>
                        </div>
                        <div class="col">
                          <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} class="form-control" id="lastname" placeholder="Last name"></input>
                        </div>
                      </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" name="username" value={this.state.username} onChange={this.onChange} id="user" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="far fa-envelope-open"></i></span>
                        </div>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange}  id="address" class="form-control" placeholder="yourname@gmail.com" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onChange} class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>


                    <input type="submit" value="Log In" class="btn btn-block btn-primary ml-4"/>

                </form>

            </div>
        </div>

    </div>

    

        )
    }
}

export default SignUp
