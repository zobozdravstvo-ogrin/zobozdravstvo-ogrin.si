import { useState, useCallback } from 'react';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type Props = {
  photos: any[];
};

const GalleryDisplay = ({ photos }: Props) => {
  const [width, setWidth] = useState<number>(-1);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const transformedPhotos = photos.map((item) => {
    return {
      ...item,
      width: Number(item.width),
      height: Number(item.height),
    };
  });

  return (
    <Measure
      bounds
      onResize={(contentRect) => setWidth(contentRect?.bounds?.width || -1)}
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
          <div>
            <Gallery
              photos={transformedPhotos}
              columns={columns}
              onClick={openLightbox}
            />
            {viewerIsOpen && (
              <Lightbox
                mainSrc={transformedPhotos[currentImage].src}
                nextSrc={
                  transformedPhotos[
                    (currentImage + 1) % transformedPhotos.length
                  ].src
                }
                prevSrc={
                  transformedPhotos[
                    (currentImage + transformedPhotos.length - 1) %
                      transformedPhotos.length
                  ].src
                }
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                  setCurrentImage(
                    (currentImage + transformedPhotos.length - 1) %
                      transformedPhotos.length
                  )
                }
                onMoveNextRequest={() =>
                  setCurrentImage((currentImage + 1) % transformedPhotos.length)
                }
              />
            )}
          </div>
        );
      }}
    </Measure>
  );
};

export default GalleryDisplay;
