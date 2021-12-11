import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const ImageHeader = ({ src, alt }: Props) => {
  return (
    <div className="header-image-container">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default ImageHeader;
