import React, { Component } from 'react';
import withStyles from '&components/withStyles';
import { Layout } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import styles from './styles.less';
import Active from './active';
import Active2 from './active2';

class HomeContent extends Component{
    constructor(props) {
        super(props);
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
                        {/*<Redirect from="/home/active" to="/home"/>*/}
                        <Route path="/home/active" component={Active}/>
                        <Route pcth="/home/personal-column" component={Active2}/>
                    </Switch>
                </main>
            </Layout.Content>
        )
    }
}

export default withStyles(
    styles
)(HomeContent);