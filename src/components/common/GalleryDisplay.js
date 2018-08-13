import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';

class GalleryDisplay extends Component {
  constructor() {
    super();
    this.state = {
      width: -1,
      currentImage: 0
    };
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const width = this.state.width;
    const { photos } = this.props;

    const transformedPhotos = photos.map(item => {
      return {
        ...item,
        width: Number(item.width),
        height: Number(item.height)
      };
    });

    return (
      <Measure
        bounds
        onResize={contentRect =>
          this.setState({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          if (width >= 1824) {
            columns = 4;
          }
          return (
            <div ref={measureRef}>
              <Gallery
                photos={transformedPhotos}
                columns={columns}
                onClick={this.openLightbox}
              />
              <Lightbox
                images={transformedPhotos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}

GalleryDisplay.propTypes = {
  photos: PropTypes.array
};
GalleryDisplay.defaultProps = {};

export default GalleryDisplay;
