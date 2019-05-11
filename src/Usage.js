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
            hour: '',
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
        value = event.target.value.toUpperCase();
        //value = event.target.value.replace('@ku.edu.tr','');
        //value = event.target.value.replace('@ku.edu.t','');
        //value = value + '@ku.edu.tr';  
      } else if(name === 'phone') { 
        value = event.target.value.replace(/\D/g,'');
      } else if(name === 'tool' || name === 'hour') {
        value = event.target.value;
      } else {
        value = event.target.value.toUpperCase(); 
      }
      this.setState({[name]: value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const url = API_URL + '/space/usage';
      let usage = {};
      usage.name = this.state.name;
      usage.surname = this.state.surname;
      usage.email = this.state.email;
      usage.tool = this.state.tool;
      usage.hour = this.state.hour;
      if(
        usage.name === '' ||
        usage.surname === '' ||
        usage.email === ''
      ) {
        return;
      }
      this.setState({
        tool: '',
        hour: ''});
      fetch(url, { // optional fetch options
          body: JSON.stringify(usage), 
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
      })
      .then(function(response) {
          // check status @ response.status etc.
          alert('Your usage was submitted: ' + usage.hour);
          return response;//.json(); // parses json
      });
      this.saveToStorage();
    }
    
    saveToStorage() {
        let data = this.state.history;
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
                    I was here !
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
                    <label className="form-label">Tool Type :</label> 
                    <select className="form-input" type="text" name="tool" value={this.state.tool} onChange={this.handleChange}>
                      <option value="3D Printer">3D Printer</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Drills">Drills</option>
                      <option value="Study">Study</option>
                      <option value="Art">Art</option>
                      <option value="Other">Other</option>
                    </select>
                </div>  
                <div className="form-line">
                    <label className="form-label">Hour :</label> 
                    <select className="form-input" type="text" name="hour" value={this.state.hour} onChange={this.handleChange}>
                      <option value="15">0-30 min</option>
                      <option value="45">30-60 min</option>
                      <option value="60">More than 60</option>
                    </select>
                </div>                 
                <input className="form-submit"type="submit" value="Submit" />
                </form>
            </div>
        )
      }
}

export default Borrow;