import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import withStyles from 'isomorphic-style-loader/withStyles';
import logo from '&static/images/logo.jpg';
import IconFont from '&static/icons';

import styles from './styles.less';

class Active extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="article-card">
        <div className="article-card-header">
          <img className="img" src={logo} alt="头像" title="头像"/>
          <span className="description">
             <span className="name">山林迷了鹿</span>·<span className="date">5月前</span>
          </span>
        </div>
        <div className="article-card-body">
          <Link to="/article" className="title">requestAnimationFrame与requestIdleCallback</Link>
          <div className="part-article">
            叙述：我们打开谷歌浏览器开发者工具的Performance进行测试，在接近1100ms处开始计算重绘，红色部分表示浏览器卡顿，原因是计算div宽度时，会损耗大量浏览器性能 叙述：我们打开谷歌浏览器开发者工具的Performance进行测试，在接近1100ms处也开始计算重绘，会有一点卡顿，但性能提...
          </div>
        </div>
        <div className="article-card-footer">
          <div className="footer-left">
            <div className="icon-container">
              <IconFont type="icon-good"/>
              <span className="font">12</span>
            </div>
            <div className="icon-container">
              <IconFont type="icon-collection"/>
              <span className="font">收藏</span>
            </div>
          </div>
          <div className="footer-right">

          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Active);
