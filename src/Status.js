import React, { Component } from 'react'

class Status extends Component {
  render() {
    const { message } = this.props

    
    return ( 
        <div className="Button home-status">        
          <div style={{marginLeft:10}}>
            <h1>{message}</h1>
          </div>
          <div>
            
          </div>
        </div>
    )
  
  }
}

export default Status

