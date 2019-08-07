import React from 'react';
import {hot} from "react-hot-loader";
import Homepage from './pages/homepage';
import {Switch, Route} from 'react-router-dom';
//引入styles
import withStyles from 'isomorphic-style-loader/withStyles';
import resetStyle from './static/styles/reset.less';
import styles from './styles.less';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Switch>
        <Route path='/home' component={Homepage}/>
      </Switch>
    )
  }
}

export default hot(module)(withStyles(styles, resetStyle)(App));