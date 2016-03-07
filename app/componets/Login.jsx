import React from 'react';
import ReactDOM from 'react-dom';


export default class Login extends React.Component {
    render () {
        return (
            <div className="login">
                <form action="/login/" method="post">

                    <label>
                        <input type="text" required name="username"/>
                        <div className="label-text">User name</div>
                    </label>
                    <label>
                        <input type="password" required name="password"/>
                        <div className="label-text">Password</div>
                    </label>
                    <button className="button" type="submit" value="Login" > Login </button>
                </form>

            </div>
        )
    }
}