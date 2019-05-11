import React, { Component } from 'react';
import {
    Link,
  } from "react-router-dom";

class Construction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
        };
    }

    render() {
        
        return(
            <div style={{width: 500}}>
                <Link to="/" className="Link close">
                    <a href="#" class="close"/>
                </Link>
                <h1>
                    This page is under construction
                </h1>
                
            </div>
        )
      }
}

export default Construction;