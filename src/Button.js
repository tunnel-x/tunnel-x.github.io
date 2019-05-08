import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      to: this.props.to,
    };
  }
  render() {
    return ( 
      <Link to={this.state.to} className="Link">
        <div className="Button">
                 
          <div >
            <img src={this.state.image} className="btn-image" alt=""/>
          </div>
          <div style={{marginLeft:10}}>
            <h1>{this.state.name}</h1>
          </div>
          
        </div>
        </Link>
    )
  }
}

export default Button