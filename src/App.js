import "./styles.css";
import React, { Component } from 'react';
class Hello extends Component {
 
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  render() {
    return <h1>Hello Word!!!</h1>;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }
 
  delete = () => {
    this.setState({ display: false });
  };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <Hello />;
    }
    return (
      <div style={{ textAlign: 'center' }}>
        {comp}
        <button onClick={this.delete}>
          Delete the component
        </button>
      </div>
    );
  }
}
 
export default App;
