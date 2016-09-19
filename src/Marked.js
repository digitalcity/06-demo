import React, { PropTypes } from 'react'
import marked from 'marked';

class Marked extends React.Component {
  render () {
    let content = marked('# dfsfds');
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Marked;
