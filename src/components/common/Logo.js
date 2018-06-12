import PropTypes from 'prop-types';
import React from 'react';
import Box from 'grommet/components/Box';
import classnames from 'classnames';

const Logo = ({ size, title, className, pad }) => {
  const classes = classnames('logo', className);
  const style = {};

  switch (size) {
    case 'small':
      style.width = '24px';
      break;
    case 'medium':
      style.width = '48px';
      break;
    case 'large':
      style.width = '80px';
      break;
    case 'xlarge':
      style.width = '195px';
      break;
    default:
      style.width = '48px';
  }

  return (
    <Box align="center" className={classes} pad={pad}>
      <img style={style} src="/images/favicon.png" alt={title} />
    </Box>
  );
};

Logo.displayName = 'Logo';

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  pad: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string
};

Logo.defaultProps = {
  size: 'medium',
  title: 'Naviter SeeYou Cloud'
};

export default Logo;
