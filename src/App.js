import "./styles.css";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
    this.incremnet = this.incremnet.bind(this);
    this.decremnet = this.decremnet.bind(this);
  }
  incremnet() {
    console.log(this)
      
    this.setState({ data: this.state.data + 1 });
  }
  decremnet() {
    console.log(this)
      
    this.setState({ data: this.state.data - 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.incremnet}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
        <button onClick={this.decremnet}>DECREMENT</button>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
