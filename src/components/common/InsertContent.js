import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InsertContent extends Component {
  render() {
    const { children } = this.props;
    return children && children.props.children !== 'HIDE_CONTENT' && children;
  }
}

InsertContent.propTypes = {
  children: PropTypes.any
};
InsertContent.defaultProps = {};

export default InsertContent;
