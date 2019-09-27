import Navbar from './component/Navbar.js'
import Content from './component/Content.js'
import React, { Component } from 'react'
import axios from 'axios'

//Getting data From public folder
export default class App extends Component {

    state={data:[]}
    componentDidMount() {
      axios.get('/data.json')
        .then(res => {
            this.setState(res.data);
            console.log(this.state.data)
        })
    }
  render() {
        return (
                <div className="App ">
                <Navbar></Navbar>
                <div className="container">
                { <Content data={this.state.data}></Content>}
                    </div>
                </div>
            )
    }
}
