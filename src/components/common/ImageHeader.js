import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageHeader extends Component {
  render() {
    const { src, alt, ...rest } = this.props;
    return (
      <div className="header-image-container">
        <img className="image-header-image" src={src} alt={alt} {...rest} />
      </div>
    );
  }
}

ImageHeader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
ImageHeader.defaultProps = {};

export default ImageHeader;
