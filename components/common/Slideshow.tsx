// @ts-ignore
import ImageGallery from 'react-image-gallery';

const renderThumbInner = () => null;

type Props = {
  slides: any[];
  className: string;
};

const Slideshow = ({ slides, className, ...rest }: Props) => {
  const images = slides.map((item) => {
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
};

export default Slideshow;
