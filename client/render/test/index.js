//modules
import React, {Component} from 'react';
// import withStyles from 'isomorphic-style-loader/withStyles';

//components
// import styles from './styles.less';

class App extends Component {
  constructor(props) {
    super(props);
  };
  click = () => {
    alert('ss');
  };

  render() {
    return (
      <div onClick={this.click}>sss</div>
    )
  }
}

// export default withStyles(styles)(App);
export default App;