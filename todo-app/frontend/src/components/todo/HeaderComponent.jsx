import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    /* this is rendered on every page display */
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedId()
        console.log(isUserLoggedIn)
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://courses.in28minutes.com/" className="navbar-brand">in28minutes</a></div>
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todo</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {/*onClick points towards a function reference not a function itself*/}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default withRouter(HeaderComponent)