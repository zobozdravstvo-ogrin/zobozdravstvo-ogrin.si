import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentSection extends Component {
  render() {
    const { sections, render, name } = this.props;
    const section = sections.find(item => {
      return item.keyname === name;
    });

    return section && render && typeof render === 'function'
      ? render(section)
      : null;
  }
}

ContentSection.propTypes = {
  sections: PropTypes.array,
  name: PropTypes.string,
  render: PropTypes.func
};

ContentSection.defaultProps = {};

export default ContentSection;
