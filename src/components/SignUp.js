import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class SignUp extends Component {
    render() {
        return (
    
    <div class="d-lg-flex half">
        <div class="bg" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")" }}></div>
        
        <div className="content m-0 p-0">
            <div className="container ml-sm-5 mt-5">
                <h4 className="text-center ml-sm-5">Sign Up to<strong> Discussion Forums</strong></h4>

                
                <form action="#" method="POST" class="mt-5">

                    <div class="form-row mb-3">
                        <div class="col m-0 p-0 ml-sm-5">
                          <input type="text" class="form-control" id="firstname" placeholder="First name"></input>
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" id="lastname" placeholder="Last name"></input>
                        </div>
                      </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" id="user" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="far fa-envelope-open"></i></span>
                        </div>
                        <input type="email" id="address" class="form-control" placeholder="yourname@gmail.com" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4 justify-content-center">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                    <div class="input-group mb-3 ml-sm-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-birthday-cake"></i></span>
                        </div>
                        <input type="date" id="birthday" name="birthday" class="form-control"></input>
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
