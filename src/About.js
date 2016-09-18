import React, { PropTypes } from 'react';
import axios from 'axios';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/newming')
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data:res.data,
          wait:false
        })
      })
      .catch(function (error) {
        alert(error);
      });
  }
  render () {
    return(
      <div>
        {
          this.state.wait ? '正在获取数据' :
          <img src={this.state.data.avatar_url} />
        }
      </div>
    )
  }
}

export default About;
