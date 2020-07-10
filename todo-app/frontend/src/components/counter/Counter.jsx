import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './counter.css'

class Counter extends Component {

  // constructor
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
  }

  render() {
    return (
      <div className="counter">
        {/* use a javascript expression to set a property value into an integer */}
        {/* use the incrementMethod attribute to pass the increment method */}
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className="count">
          {this.state.counter}
        </span>
      </div>
    );
  }

  increment(by) {
    // literals allowing embedded expressions. are enclosed by the bacl-tick(` `)
    console.log(`increment from child - ${by}`)
    this.setState(
      // arrow callback function with the previous state
      (prevState) => {
        // return state object
        return { counter: prevState.counter + by }
      }
    )
  }
}

class CounterButton extends Component {
  // Define the initial state in a constructor
  // state => 0
  constructor() {
    // needs to be called before using this pointer
    super()
    // define the initial state
    this.state = {
      counter: 0
    }
    // binds the method to the class
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        {/*for locally defined method, use this*/}
        <button onClick={this.increment}>+{this.props.by}</button>
        {/*<span className="count">
          {this.state.counter}
          </span>*/}
      </div>
    )
  }

  // class methods don't start with 'function'
  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    })
    // calls parent increment method with by property
    this.props.incrementMethod(this.props.by)
  }

}
// sets default value for property
CounterButton.defaultProps = {
  by: 1
}
// sets default type for property
CounterButton.propTypes = {
  by: PropTypes.number
}

export default Counter
