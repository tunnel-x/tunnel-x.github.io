import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
    };
  }
  render() {
    return ( 
        <div className="Button">        
          <div >
            <img src={this.state.image} className="btn-image" alt="image"/>
          </div>
          <div style={{marginLeft:10}}>
            <h1>{this.state.name}</h1>
          </div>
        </div>
    )
  }
}

export default Button