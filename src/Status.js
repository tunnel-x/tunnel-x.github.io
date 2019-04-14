import React, { Component } from 'react'

class Status extends Component {
  render() {
    const { message } = this.props
    const { status } = "OPEN";
    
    return ( 
        <div className="Button home-status">        
          <div style={{flex:3,marginLeft:10}}>
            <h1>{message}</h1>
          </div>
          <div style={{flex:3}}>
            <h1>open</h1>
          </div>
        </div>
    )
  
  }
}

export default Status

