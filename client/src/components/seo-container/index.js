//modules
import React, {Component} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
//components

class SEOContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {title, description} = this.props;
    return (
      <HelmetProvider>
        <Helmet>
          <title>{title?title: ''}</title>
          <meta name="description" content={description?description: ''}/>
        </Helmet>
        {this.props.children}
      </HelmetProvider>
    )
  }
}

export default SEOContainer;