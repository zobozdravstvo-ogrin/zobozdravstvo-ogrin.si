import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';

class TeamCard extends Component {
  render() {
    const { heading, description, thumbnail, basis, ...rest } = this.props;
    return (
      <Box
        className="team-card-container"
        {...rest}
        justify="center"
        align="center"
        // basis={basis}
      >
        {thumbnail && (
          <Box pad="small" className="team-image-container">
            <img src={thumbnail} alt={heading} />
          </Box>
        )}
        {heading && <h3 className="team-heading">{heading}</h3>}
        {description && (
          <Box className="team-desc-container">{description}</Box>
        )}
      </Box>
    );
  }
}

TeamCard.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnail: PropTypes.string,
  basis: PropTypes.string
};

TeamCard.defaultProps = {};

export default TeamCard;
