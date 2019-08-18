//modules
import React, {Component} from 'react';
import { Layout } from 'antd';
import SEOContainer from '&components/seo-container';
import withStyles from 'isomorphic-style-loader/withStyles';
const {Content} = Layout;
import antdLayoutStyle from 'antd/lib/layout/style/index.css';

//components
import styles from './styles.less';
import Header from './header';

// console.log(styles._getCss());

class Homepage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <SEOContainer title="我的博客-首页" description="我的博客首页">
        <Layout>
          <div className="container">
            <Header/>
          </div>
        </Layout>
      </SEOContainer>
    )
  }
}

export default withStyles(styles, antdLayoutStyle)(Homepage);