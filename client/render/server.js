import React from 'react';
import App from '../src/index.js';
// import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
// import store from '&store/config/redux';
import {StaticRouter as Router} from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export default (location, context, insertCss) => {
    return (
        <StyleContext.Provider value={{insertCss}}>
            <ConfigProvider>
                <Router context={context} location={location}>
                    <App/>
                </Router>
            </ConfigProvider>
        </StyleContext.Provider>
    )
};