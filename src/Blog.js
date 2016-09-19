import React, { PropTypes } from 'react'
import { getMd } from './utils/helpers';
import marked from 'marked';
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let add = this.props.params.title;
    getMd(add)
      .then( (recData) => {
        // console.log(recData.getJson);
        this.setState({
          data:recData.getMd,
          wait:false
        })
        console.log(this.state.data);
      });
  }
  render () {
    let content = this.state.wait ? '请稍等' : marked(this.state.data);
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;
