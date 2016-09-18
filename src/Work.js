import React, { PropTypes } from 'react';
import Card from './components/Card';

import Bg from './image/home1.jpg';
import { getJson } from './utils/helpers';

let cardData = [
  {title:'第一天',desc:'第一天描述',img:Bg,url:'a'},
  {title:'第二天',desc:'第二天描述',img:Bg,url:'b'},
  {title:'第三天',desc:'第三天描述',img:Bg,url:'c'},
  {title:'第四天',desc:'第四天描述',img:Bg,url:'d'},
  {title:'第五天',desc:'第五天描述',img:Bg,url:'e'}
]

class Work extends React.Component {
  componentDidMount(){
    getJson()
      .then( (recData) => {
        console.log(recData.getJson);
      });
  }
  render () {
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {cardData.map( (item,i) => <Card {...item} key={i} /> )}
        </div>
      </div>
    )
  }
}

export default Work;
