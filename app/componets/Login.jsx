import React from 'react';
import ReactDOM from 'react-dom';
import Auth from'../ajax/Auth.jsx';
require("../../public/css/login.css");

export default class Login extends React.Component {
    
    render () {
        return <div className="login">
                <form onSubmit={this.login.bind(this)}>

                    <label>
                        <input type="text" required ref="username"/>
                        <div className="label-text">User name</div>
                    </label>
                    <label>
                        <input type="password" required ref="password"/>
                        <div className="label-text">Password</div>
                    </label>
                    <button className="button" type="submit" > Login </button>
                </form>

            </div>
        

    }

     login(e) {
        e.preventDefault();
        Auth.login('/auth/login', ReactDOM.findDOMNode(this.refs.username).value, ReactDOM.findDOMNode(this.refs.password).value);
        }
    
}