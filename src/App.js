import "./styles.css";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handelDisplay = this.handelDisplay.bind(this);
  }
  handelDisplay(){
    let btn = !this.state.display
    this.setState({display: btn})
  }
  render() {
    if(!this.state.display) { return(
      <div style={{ textAlign: 'center' }}>
          <button onClick={this.handelDisplay}>hiện </button>
      </div>
    )}
    return (
      <div style={{ textAlign: 'center' }}>
          <button btn='false'onClick={this.handelDisplay}>ẩn </button>
          <p>content</p>
      </div>
    );
  }
}
 
export default App;
