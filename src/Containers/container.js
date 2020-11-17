import React from 'react';
import Statement from '../statement'
import Image from '../image'
import {yes, no} from '../objects'

//import './App.css';

class Container extends React.Component{

    state = {
        clicked: false,
        no: no,
        yes: yes
    }

    statementHandler = () => {
        return this.state.clicked ?  this.state.yes['yes-statement'] : this.state.no["no-statement"]
    }

    imageHandler = () => {
        return this.state.clicked ?  this.state.yes['yes-image'] : this.state.no["no-image"]
    }

    clickHandler = () => {
        
        this.setState(previousState =>({
            clicked: !previousState.clicked
        }))

        
    }
    
    render(){
        
        return  (
        <div>
            <Statement statement={this.statementHandler()}/>
            <Image clickHandler={this.clickHandler} image={this.imageHandler()}/>
        </div>
        )
    }
    
}

export default Container