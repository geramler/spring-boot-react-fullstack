import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos:
                [
                    // { id: 1, description: 'Learn to Dance', done: false, targetDate: new Date() },
                    // { id: 2, description: 'Become an Expert at React', done: false, targetDate: new Date() },
                    // { id: 3, description: 'Visit India', done: false, targetDate: new Date() }
                ]
        }
    }

    // called just before a component is unmounted (removed from view)
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        // do render() after state is updated
        return true;
    }

    // called after the first time render() is called 
    componentDidMount() {
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
            })
    }
    
    // called after constructor and at anytime state is updated
    render() {
        console.log('render')
        return (
            <div className="listTodosComponent">
                <h1>List Todos</h1>
                <div className="container">
                    {/* Table head */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //map state todos array into a list of todos rows
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListTodosComponent