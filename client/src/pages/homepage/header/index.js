import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import IconFont from '&static/icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import {withRouter, Link} from 'react-router-dom';
import axios from '&helpers/axios';

import MenuIcon from '&components/menu-icon';
import Menu from '&components/menu';
import styles from './styles.less';
import themeImg from '&static/images/theme.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: {
                visible: false
            }
        }
    };

    menuVisibleAction = () => {
        const {nav} = this.state;
        nav.visible = !nav.visible;
        this.setState({nav});
    };

    componentDidMount() {
        // axios.post('/login')
    }

    render() {
        const {nav} = this.state;
        const {menuVisibleAction} = this;
        const {location} = this.props;
        return (
            <Layout.Header>
                <nav className="blog-nav">
                    <div className="blog-nav-title">
                        <Link to="/login">登录</Link>
                        <span>.</span>
                        <Link to="/register">注册</Link>
                    </div>
                    <div className={nav.visible ? 'blog-nav-right' : 'blog-nav-right bog-nav-menu-action'}>
                        {
                            nav.visible && (
                                <Menu className="blog-nav-menu" dataSource={[
                                    {
                                        label: '首页',
                                        to: '/home',
                                        active: location.pathname === '/home'
                                    },
                                    {
                                        label: '个人中心',
                                        to: '/infocenter',
                                        active: location.pathname === '/infocenter'
                                    }
                                ]}/>
                            )
                        }
                        <button
                            className="bog-nav-menu-trigger"
                            type="button"
                            title="菜单"
                            onClick={menuVisibleAction}>
                            {nav.visible ? <IconFont type="icon-close"/> : <MenuIcon/>}
                        </button>
                    </div>
                </nav>
                <div className="blog-theme">
                    <div className="blog-theme-left">
                        <div className="blog-theme-description">
                            <h3 className="description-title">HELLO，<br/>I AM START MAKER...</h3>
                            <p className="description-content">Professional _web designer & developer</p>
                            <Link className="about-me" to="/aboutMe">ABOUT ME_</Link>
                        </div>
                    </div>
                    <div className="blog-theme-right">
                        <img className="blog-theme-img" src={themeImg} title="my blog" alt="my blog"/>
                        <ul className="blog-contract">
                            <li className="blog-contract-information">
                                <IconFont type="icon-github"/>
                            </li>
                            <li className="blog-contract-information">
                                <IconFont type="icon-vx"/>
                            </li>
                            <li className="blog-contract-information">
                                <IconFont type="icon-qq"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout.Header>
        )
    }
}

export default withStyles(
    styles
)(withRouter(Header));