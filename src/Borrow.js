import React, { Component } from 'react';
import {
    Link,
  } from "react-router-dom";
import API_URL from './config';

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            surname: '',
            email: '',
            tool: '',
            phone: '',
            history: {},
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveToStorage = this.saveToStorage.bind(this);
        this.recover = this.recover.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
      if(name === 'email') {
        value = event.target.value.toLowerCase();
      } else if(name === 'phone') { 
        value = event.target.value.replace(/\D/g,'');
      } else {
        value = event.target.value.toUpperCase(); 
      }
      this.setState({[name]: value});
    }

    handleSubmit(event) {
        const url = API_URL + '/space/borrow';
        let borrow = {};
        borrow.name = this.state.name;
        borrow.surname = this.state.surname;
        borrow.email = this.state.email;
        borrow.tool = this.state.tool;
        borrow.phone = this.state.phone;
        if ( borrow.name === '' ||
            borrow.surname === '' ||
            borrow.email === '' ||
            borrow.tool === '' ||
            borrow.phone === '' ) {
                return;
        }
        this.setState({tool: ''});
        fetch(url, { // optional fetch options
            body: JSON.stringify(borrow), 
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST',
        })
        .then(function(response) {
            // check status @ response.status etc.
            alert('Your borrow request was submitted ' + borrow.name);
            return response;//.json(); // parses json
        });
        event.preventDefault();
        this.saveToStorage();
    }
    
    saveToStorage() {
        let data = {};
        data.name = this.state.name;
        data.surname = this.state.surname;
        data.email = this.state.email;
        data.phone = this.state.phone;
        localStorage.setItem('history', JSON.stringify(data));
    }

    recover() {
        //error catch
        let data = JSON.parse(localStorage.getItem('history'));
        if (!data) {
            return;
        }
        this.setState({
            history: data,
            name: data.name, 
            surname: data.surname,
            email: data.email,
            phone: data.phone,
        });

    }

    componentDidMount() {
        this.recover();
    }

    render() {
        
        return(
            <div style={{width: 500}}>
                <Link to="/" className="Link close">
                    <a href="#" class="close"/>
                </Link>
                <h1>
                    Borrow a Tool !
                </h1>
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-line">
                    <label className="form-label"> Name :</label> 
                    <input className="form-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>  
                <div className="form-line">
                    <label className="form-label"> Surname :</label> 
                    <input className="form-input" type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                </div>  
                <div className="form-line">
                    <label className="form-label"> e-mail :</label> 
                    <input className="form-input" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>  
                <div className="form-line">
                    <label className="form-label">Tool Name :</label> 
                    <input className="form-input" type="text" name="tool" value={this.state.tool} onChange={this.handleChange} />
                </div>  
                <div className="form-line">
                    <label className="form-label">Phone Number :</label> 
                    <input className="form-input" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </div>                 
                <input className="form-submit"type="submit" value="Submit" />
                </form>
            </div>
        )
      }
}

export default Borrow;