import React, { PropTypes } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
