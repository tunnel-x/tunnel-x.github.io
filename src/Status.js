import React, { Component } from 'react'
import API_URL from './config';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []        
    };
    this.fetchStatus = this.fetchStatus.bind(this)
  }
  fetchStatus () {
    let status = [];
    const url = API_URL + '/space/status';
    //fetch(url).then(response => response.json()).then(data => status = data);
    fetch(url).then(res => res.json()).then(json => this.setState({ data: json }));
    // console.log("status "+ this.state.data); 
    //this.setState({status: status}); 
  }

  componentDidMount() {
    this.fetchStatus();
}

  render() {
    const { message } = this.props;
    const status = this.state.data.status; 
    return ( 
        <div className="Button home-status">        
          <div style={{flex:3,marginLeft:10}}>
            <h1>{message}</h1>
          </div>
          <div style={{flex:3}}>
            <h1>{status}</h1>
          </div>
        </div>
    )
  
  }
}

export default Status

