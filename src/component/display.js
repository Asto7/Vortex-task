 import React, { Component } from 'react'
//  import Contet from './'
 export default class Display extends Component {
   
render(){
    const listItems = this.props.data.map((number) =>
    <li>{number.name} {number.age}<Content data={number.child}></Content></li>
  );
  return (
    <ul>{listItems}</ul>
  );
  }
  
  
 }
 