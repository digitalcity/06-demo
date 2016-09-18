import React, { PropTypes } from 'react';

import { searchGit } from './utils/helpers';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    searchGit()
     .then( (data) => {
        console.log(data);
        this.setState({
          data:data.data,
          wait:false
        })
        console.log(this.state.data);
      });
  }
  render () {
    let gitInfo = (
      <div>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        { this.state.wait ? '请稍等' : gitInfo }
      </div>
    )
  }
}

export default About;
