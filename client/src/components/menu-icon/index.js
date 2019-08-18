import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './styles.less';

class MenuIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return (
      <div className="menu-icon">
        <span className="menu-icon-item"></span>
        <span className="menu-icon-item"></span>
        <span className="menu-icon-item"></span>
      </div>
    )
  }
}

export default withStyles(styles)(MenuIcon);