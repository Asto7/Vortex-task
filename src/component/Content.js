import React, { Component } from 'react'
export default class Content extends Component {


render(){
  const listItems = this.props.data.map((data) =>
  <li className="kira">Hey This is <span className="coloring">{data.name}</span> And I'm <span className="coloring">{data.age}</span> yr Old and I love to play <span className="coloring">{data.game}</span> <Content data={data.child}></Content></li>
);
return (
  <ul className="final">{listItems}</ul>
);
}




}
