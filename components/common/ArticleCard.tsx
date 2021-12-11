// @ts-ignore
import Box from 'grommet/components/Box';
import format from 'date-fns/format';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  heading: string;
  description: string;
  thumbnail: string;
  basis: string;
  author: string;
  date: string;
  link: string;
  pad: any;
};

const ArticleCard = ({
  heading,
  description,
  thumbnail,
  link,
  date,
  author,
  basis,
  ...rest
}: Props) => {
  return (
    <Box
      className="article-card-container"
      {...rest}
      justify="center"
      align="center"
      basis={basis}
      pad="small"
    >
      <Link href={link} passHref>
        <Box>
          {thumbnail && (
            <Box pad="none" className="article-image-container">
              <Image src={thumbnail} alt={heading} width={288} height={90} />
            </Box>
          )}

          <Box
            pad="medium"
            className="article-card-item-wrapper"
            direction="column"
            align="center"
            justify="center"
          >
            {heading && (
              <h3 className="article-heading">
                <a>{heading}</a>
              </h3>
            )}
            {description && (
              <Box pad="small" className="article-desc-container">
                {description}
              </Box>
            )}
            {date && (
              <Box className="article-desc-container">
                {format(new Date(date), 'dd.MM.yyyy')}
              </Box>
            )}
            {author && <Box className="article-desc-container">{author}</Box>}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ArticleCard;
