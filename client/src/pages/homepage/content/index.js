import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Layout } from 'antd';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

import styles from './styles.less';
import Active from './active';

class HomeContent extends Component{
  constructor(props) {
    super(props);
  }
  click = (url) => {
    return () => {
      const {history} = this.props;
      history.push(url);
    }
  }
  createNav = navOptions => navOptions.map(item => (
    <li key={item.url}>
      <Link className="content-nav-item" to={item.url}>
        {item.label}
      </Link>
    </li>
  ));

  render() {
    return (
      <Layout.Content>
        <ul className="content-nav">
          {
            this.createNav([
            {
              label: '动态',
              url: '/home/active'
            },
            {
              label: '专栏',
              url: '/home/personal-column'
            }
           ])
          }
        </ul>
        <main>
          <Switch>
            {/*<Route path="/home" component*/}
            {/*<Redirect from="/home" to="/home/active" exact/>*/}
            <Route exact path="/home" component={Active}/>
            {/*<Redirect from="/home/active" to="/home"/>*/}
            <Route path="/home/active" component={Active}/>
          </Switch>
        </main>
      </Layout.Content>
    )
  }
}

export default withStyles(
  styles
)(HomeContent);