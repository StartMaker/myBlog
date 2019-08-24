import React, {Component} from 'react';
import {Layout} from 'antd';
import IconFont from '&static/icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import {withRouter} from 'react-router-dom';

import MenuIcon from '&components/menu-icon';
import Menu from '&components/menu';
import styles from './styles.less';
import themeImg from '&static/images/theme.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    }
  };

  menuVisibleAction = () => {
    const {menuVisible} = this.state;
    this.setState({
      menuVisible: !menuVisible
    });
  };

  render() {
    const {menuVisible} = this.state;
    const {menuVisibleAction} = this;
    const {location} = this.props;
    return (
      <Layout.Header>
        <nav className="blog-nav">
          <div className="blog-nav-title">myBlog</div>
          <div className={menuVisible?"blog-nav-right bog-nav-menu-action":"blog-nav-right"}>
            {
              menuVisible&&(
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
              {!menuVisible?<MenuIcon/>:<IconFont type="icon-close"/>}
            </button>
          </div>
        </nav>
        <div className="blog-theme">
          <div className="blog-theme-left">
            <div className="blog-theme-description">
              <h3 className="description-title">HELLO，<br/>I AM START MAKER...</h3>
              <p className="description-content">Professional _web designer & developer</p>
              <a className="about-me" href="/aboutMe">ABOUT ME_</a>
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