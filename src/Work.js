import React, { PropTypes } from 'react';
import Card from './components/Card';

import Bg from './image/home1.jpg';
import { getJson } from './utils/helpers';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        // console.log(recData.getJson);
        this.setState({
          data:recData.getJson,
          wait:false
        })
      });
  }
  render () {
    let cards = this.state.data.map( (item,i) => <Card {...item} key={i} /> );

    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ? '请稍等' : cards}
        </div>
      </div>
    )
  }
}

export default Work;
