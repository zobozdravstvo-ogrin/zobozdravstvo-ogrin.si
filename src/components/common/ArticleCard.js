import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import moment from 'moment';

class ArticleCard extends Component {
  render() {
    const {
      heading,
      description,
      thumbnail,
      link,
      date,
      author,
      basis,
      ...rest
    } = this.props;
    return (
      <Box
        className="article-card-container"
        {...rest}
        justify="center"
        align="center"
        basis={basis}
        pad="small"
      >
        <Box>
          {thumbnail && (
            <Box pad="none" className="article-image-container">
              <img src={thumbnail} alt={heading} />
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
                <a href={link}>{heading}</a>
              </h3>
            )}
            {description && (
              <Box pad="small" className="article-desc-container">{description}</Box>
            )}
            {date && (
              <Box className="article-desc-container">
                {moment(date).format('DD.MM.YYYY')}
              </Box>
            )}
            {author && <Box className="article-desc-container">{author}</Box>}
          </Box>
        </Box>

      </Box>
    );
  }
}

ArticleCard.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnail: PropTypes.string,
  basis: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string
};

ArticleCard.defaultProps = {};

export default ArticleCard;
