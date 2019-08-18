import {render} from 'react-dom';
import React from 'react';
import App from '../src/index.js';
import {ConfigProvider} from 'antd';
import 'hotcss/src/hotcss';
import {BrowserRouter as Router} from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

render(
  <StyleContext.Provider value={{insertCss}}>
    <ConfigProvider>
      <Router>
        <App/>
      </Router>
    </ConfigProvider>
  </StyleContext.Provider>,
  document.getElementById('root')
);
