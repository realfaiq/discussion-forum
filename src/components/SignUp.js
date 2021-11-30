import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div class="modal fade" id="signupModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">Sign Up to <strong>Discussions</strong></h5>
                            <button class="close" data-dismiss="modal">
                                <span class="text-white">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <label for="FullName">Full Name</label>
                                        <input type="text" class="form-control" name="fullname" placeholder="Enter Your Full Name" />
                                    </div>

                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" name="email" placeholder="your-email@gmail.com" />
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" name="password" placeholder="Password" />
                                    </div>

                                    <div class="form-group">
                                        <label for="cpassword">Confirm Password</label>
                                        <input type="password" class="form-control" name="cpassword" placeholder="Confirm Password" />
                                    </div>

                                    <div class="form-group">
                                        <input type="submit" value="Sign Up" class="form-control btn btn-primary" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
