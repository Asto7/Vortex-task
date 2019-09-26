import React from 'react';
import Navbar from './component/Navbar.js'
import Content from './component/Content.js'

function App() {
    var data=[
       {"name":"KIRA","age":11,"game":"FootBall","child":[
                                        {"name":"Light","age":15,"game":"Cricket","child":[
                                                                         {"name":"Asto","age":21,"game":"BaskEtBall","child":[]},
                                                                         {"name":"XYZ","age":12,"game":"BaskEtBall","child":[
                                                                         {"name":"A","age":4,"game":"BaskEtBall","child":[
                                                                         {"name":":)","age":34,"game":"VolleyBall","child":[]},

                                                                         ]},
                                                                         {"name":"B","age":45,"game":"BaskEtBall","child":[]}

                                                                         ]},
                                                                         {"name":"C","age":14,"game":"BaskEtBall","child":[]}

                                                                        ]}
                                       ]},
       {"name":"D","age":10,"game":"HandBall","child":[]},
       {"name":"E","age":60,"game":"Hockey","child":[]},
       {"name":"F","age":40,"game":"Guitar","child":[]},
       {"name":"G","age":35,"game":"Drums","child":[]},

     ]


  return (
    <div className="App ">
      <Navbar></Navbar>
      <div className="container">
      <Content data={data}></Content>
        </div>
    </div>
  );
}

export default App;
