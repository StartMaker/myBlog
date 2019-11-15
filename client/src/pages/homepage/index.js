import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import SEOContainer from '&components/seo-container';
import withStyles from '&components/withStyles';
import antdLayoutStyle from 'antd/lib/layout/style/index.css';
import antdDividerStyle from 'antd/lib/divider/style/index.css';

import styles from './styles.less';
import Header from './header';
import Content from './content';
import axios from 'axios';

// console.log(styles._getCss());

class Homepage extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        axios.get('/login')
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <SEOContainer title="我的博客-首页" description="我的博客首页">
                <Layout>
                    <div className="container">
                        <Header/>
                        <Divider dashed/>
                        <Content/>
                    </div>
                </Layout>
            </SEOContainer>
        )
    }
}

export default withStyles(
    styles, antdLayoutStyle, antdDividerStyle
)(Homepage);