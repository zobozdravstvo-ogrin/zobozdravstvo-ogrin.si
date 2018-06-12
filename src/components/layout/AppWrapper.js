import React from 'react';
import PropTypes from 'prop-types';

if (process.env.NODE_ENV !== 'production') {
  require('../../styles/style.scss');
}

class ApplicationWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}

ApplicationWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ApplicationWrapper;
