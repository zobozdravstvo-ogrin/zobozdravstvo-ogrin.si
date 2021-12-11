// @ts-ignore
import Box from 'grommet/components/Box';
import Image from 'next/image';

type Props = {
  heading: string;
  description: React.ReactNode;
  thumbnail: string;
  basis: string;
  pad: any;
};

const TeamCard = ({
  heading,
  description,
  thumbnail,
  basis,
  ...rest
}: Props) => {
  return (
    <Box
      className="team-card-container"
      {...rest}
      justify="center"
      align="center"
    >
      {thumbnail && (
        <Box pad="small" className="team-image-container">
          <Image src={thumbnail} alt={heading} width={244} height={244} />
        </Box>
      )}
      {heading && <h3 className="team-heading">{heading}</h3>}
      {description && <Box className="team-desc-container">{description}</Box>}
    </Box>
  );
};

export default TeamCard;
