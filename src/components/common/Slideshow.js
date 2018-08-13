import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

const renderThumbInner = () => null;

class Slideshow extends Component {
  render() {
    const { slides, className, ...rest } = this.props;
    const images = slides.map(item => {
      return {
        original: item.image,
        renderThumbInner,
        originalAlt: item.title,
        originalTitle: item.title,
      };
    });

    return (
      <ImageGallery
        items={images}
        infinite={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={12000}
        slideDuration={450}
        additionalClass={className}
        {...rest}
      />
    );
  }
}

Slideshow.propTypes = {
  slides: PropTypes.array,
  className: PropTypes.string
};

Slideshow.defaultProps = {};

export default Slideshow;
