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
     .then( (recData) => {
        this.setState({
          data:recData.getDate,
          wait:false
        })
        console.log(this.state.data);
      });
  }
  render () {
    let styles={
      root:{
        maxWidth:'700px',
        margin:'0 auto',
        border:'1px solid teal',
        textAlign:'center'
      }
    }
    let gitInfo = (
      <div style={styles.root}>
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
