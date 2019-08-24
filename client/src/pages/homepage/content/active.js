import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './styles.less';

class Active extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>222</div>
    )
  }
}

export default withStyles(styles)(Active);
