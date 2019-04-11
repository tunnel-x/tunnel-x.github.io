import React, { Component } from 'react'

class Status extends Component {
  render() {
    const { message } = this.props

    return ( 
        <div className="Status">
            <h1>{message}</h1>
        </div>
    )
  }
}

export default Status

