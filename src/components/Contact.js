import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const {name,email,phone}=this.props
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email :{email}</li>
                    <li>Phone :{phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.defaultProps={name:"John",email:"abc@gmail.com",phone:"+198379238"};

export default Contact;