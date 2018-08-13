import React, { Component } from 'react';
import PropTypes from 'prop-types';

const toJsx = require('@mapbox/jsxtreme-markdown/lib/to-jsx');
const presets = require('remark-preset-davidtheclark');

class InsertMarkdown extends Component {
  render() {
    const { body, nlToBr } = this.props;
    let bodyHtml = body
      ? toJsx(body, {
          remarkPlugins: presets.plugins
        })
      : '';

    if (nlToBr) {
      bodyHtml = bodyHtml.replace(/\\n/g,"<br />");
    }

    return (
      <div
        className="body-container"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    );
  }
}

InsertMarkdown.propTypes = {
  body: PropTypes.string,
  nlToBr: PropTypes.bool
};

InsertMarkdown.defaultProps = {
  nlToBr: false
};

export default InsertMarkdown;
