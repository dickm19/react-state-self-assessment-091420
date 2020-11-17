import React from 'react';

import './App.css';

class Image extends React.Component{


    render(){
        return (<img onClick={this.props.clickHandler} alt = "no/yes" src={this.props.image}></img>)
    }
    
}

export default Image