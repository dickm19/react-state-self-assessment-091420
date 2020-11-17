import React from 'react';
import objects from './objects'

import './App.css';

class App extends React.Component{

  state = {
    display: 'no',
    image: objects.no["no-image"],
    statement: objects.no["no-statement"]
  }

  renderOpp = () => {
    if (this.state.display == "no"){
      this.setState({
        display: 'yes',
        image: objects.yes["yes-image"],
        statement: objects.yes["yes-statement"]
      })
    }else{
      this.setState({
        display: 'no',
        image: objects.no["no-image"],
        statement: objects.no["no-statement"]
      })
    }

    
  }

  render(){
    
    return (
      <div>
        <h1>{this.state.statement}</h1>
        <img src={`${this.state.image}`} onClick={this.renderOpp}></img>
      </div>
        
     
    )
  }

}

export default App;
