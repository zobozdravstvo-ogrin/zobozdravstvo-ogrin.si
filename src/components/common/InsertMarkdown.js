import React, { Component } from 'react';
import PropTypes from 'prop-types';

const toJsx = require('@mapbox/jsxtreme-markdown/lib/to-jsx');

class InsertMarkdown extends Component {
  render() {
    const { body } = this.props;
    const bodyHtml = body ? toJsx(body) : '';
    return (
      <div className="body-container" dangerouslySetInnerHTML={{__html: bodyHtml}} />
    );
  }
}

InsertMarkdown.propTypes = {
  body: PropTypes.string
};
InsertMarkdown.defaultProps = {};

export default InsertMarkdown;
