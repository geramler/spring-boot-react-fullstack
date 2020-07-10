import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    // by adding state, this component becomes controlled
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // update state based on form change 
    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                // must be a constant, use []
                [event.target.name]:
                    event.target.value
            }
        )
    }

    loginClicked() {
        // in28minutes, dummy
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            // redirect to welcome page
            // use ticks when icluding a variable in a String
            this.props.history.push(`/welcome/${this.state.username}`)
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* conditional rendering with &&
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                    */}
                    <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                    <ShowLoginSuccesMessage showSuccessMessage={this.state.showSuccessMessage} />
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )

        // functional component
        function ShowInvalidCredentials(props) {
            if (props.hasLoginFailed) {
                return <div className="alert alert-warning">Invalid Credentials</div>
            }
            return null
        }

        function ShowLoginSuccesMessage(props) {
            if (props.showSuccessMessage) {
                return <div>Login Successful</div>
            }
            return null
        }

    }
}
export default LoginComponent