import React from 'react';
import styles from './styles.less';
import withStyles from 'isomorphic-style-loader/withStyles';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  createLinks = () => {
    const {dataSource} = this.props;
    return dataSource.map(item => {
      if(item.active){
        return (
          <li className="menu-item" key={item.to}>
            <span className="menu-item-link">{item.label}</span>
          </li>
        )
      }
      return (
        <li className="menu-item" key={item.to}>
          <Link to={item.to} className="menu-item-link">{item.label}</Link>
        </li>
      );
    });
  };

  render() {
    const {createLinks} = this;
    let {className} = this.props;
    return (
      <div className={className? className+" menu-wrapper": "menu-wrapper"}>
        <ul className="menu">
          {createLinks()}
        </ul>
      </div>
    )
  }
}

export default withStyles(styles)(Menu);