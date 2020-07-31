import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
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
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
            })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        // console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()                }
            )
    }

    // called after constructor and at anytime state is updated
    render() {
        console.log('render')
        return (
            <div className="listTodosComponent">
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    {/* Table head */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-warning" onClick={() =>
                                                this.deleteTodoClicked(todo.id)}>Delete
                                            </button></td>
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