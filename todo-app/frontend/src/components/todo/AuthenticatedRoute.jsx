import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import { Route, Redirect } from 'react-router-dom'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedId()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login"></Redirect>
        }
    }
}

export default AuthenticatedRoute