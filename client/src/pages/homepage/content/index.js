import React, { Component } from 'react';
import withStyles from '&components/withStyles';
import { Layout } from 'antd';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

import styles from './styles.less';
import Active from './children-page/active';
import Active2 from './active2';

class HomeContent extends Component{
    constructor(props) {
        super(props);
    }
    createNav = navOptions => {
        const { location } = this.props;
        return navOptions.map(item => (
                  <li className="content-nav-item" key={item.url}>
                      <Link
                          className={location.pathname === item.url ? 'content-nav-link content-nav-link-action' : 'content-nav-link'}
                          to={item.url}>
                          {item.label}
                      </Link>
                  </li>
                ));
    };

    render() {
        return (
            <Layout.Content>
                <ul className="article-nav">
                    {
                        this.createNav([
                                {
                                    label: '动态',
                                    url: '/home/active'
                                },
                                {
                                    label: '专栏',
                                    url: '/home/personal-column'
                                },
                                {
                                    label: '收藏',
                                    url: '/home/personal-collection'
                                }
                            ])
                    }
                </ul>
                <main className="article-main">
                    <Switch>
                        <Route path="/home/active" component={Active} exact/>
                        <Route path="/home/personal-column" component={Active2}/>
                        <Route path="/home/personal-collection" component={Active}/>
                        <Redirect from="/home" to="/home/active"/>
                    </Switch>
                </main>
            </Layout.Content>
        )
    }
}

export default withStyles(
    styles
)(withRouter(HomeContent));
