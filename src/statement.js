import React from 'react';


import './App.css';

class Statement extends React.Component{

    render(){
        
        return  (
        <h1>{this.props.statement}</h1> 
        )
    }
    
}

export default Statement