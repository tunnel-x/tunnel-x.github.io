import React, { Component } from 'react';
import {
    Link,
  } from "react-router-dom";

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '', 
            surname: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        
        return(
            <div>
            <Link to="/" className="Link close">
                <a href="#" class="close"/>
            </Link>
                <h1>
                    I Borrowed 
                </h1>
                <form onSubmit={this.handleSubmit}>
                <div>                
                    <label>
                        Name : 
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Surname :
                        <input type="text" name="name" />
                    </label> 
                </div>               
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
      }
}

export default Borrow;