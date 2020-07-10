// whenever we use JSX, you need to have React in the import
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        {/* at any time, just one route is active */}
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            {/* fallback URI */}
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/*    
                <LoginComponent />
                <WelcomeComponent />
                */}
            </div>
        )
    }
}

// use export to make it available to other modules
export default TodoApp