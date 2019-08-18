//modules
import React, {Component} from 'react';
import {Layout} from 'antd';
import {withRouter} from 'react-router-dom';
import IconFont from '&static/icons';
import withStyles from 'isomorphic-style-loader/withStyles';

//components
import MenuIcon from '&components/menu-icon';
import Menu from '&components/menu';
import styles from './styles.less';

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
    console.log(this);
    const {menuVisible} = this.state;
    const {menuVisibleAction} = this;
    const {location} = this.props;
    return (
      <Layout.Header>
        <nav className="blog-nav">
          <div className="blog-nav-title">myBlog</div>
          <div className={menuVisible?"blog-nav-right bog-nav-menu-action":"blog-nav-right"}>
            {menuVisible&&(
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
            {/*// {true&&}*/}
            <button
              className="bog-nav-menu-trigger"
              type="button"
              title="菜单"
              onClick={menuVisibleAction}>
              {!menuVisible?<MenuIcon/>:<IconFont type="icon-close"/>}
            </button>
          </div>
        </nav>
      </Layout.Header>
    )
  }
}

export default withStyles(styles)(withRouter(Header));