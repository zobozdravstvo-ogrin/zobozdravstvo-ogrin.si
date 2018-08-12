import React from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import settingsData from '@mapbox/batfish/data/settings-data';
import Logo from './Logo';

const AppHeader = props => {
  const menuItems = settingsData.header.links.map(item => {
    return (
      <Anchor key={item.link} href={item.link}>
        {item.name}
      </Anchor>
    );
  });

  return (
    <Header
      className="app-header"
      justify="center"
      pad={{ horizontal: 'small', vertical: 'none' }}
      fixed={true}
    >
      <Box
        size={{ width: { max: 'xxlarge' } }}
        direction="row"
        responsive={false}
        justify="between"
        align="center"
        pad="none"
        flex="grow"
      >
        <Anchor
          className="app-logo"
          href="/"
          style={{ textDecoration: 'none' }}
        >
          <Logo size="medium" />
          <div className="app-title">
            <span>{settingsData.short_title}</span>
          </div>
        </Anchor>

        <Box flex="grow" align="end">
          <Menu
            // label=""
            inline={true}
            direction="row"
            flex="grow"
            size="small"
          >
            {menuItems}
          </Menu>
        </Box>
      </Box>
    </Header>
  );
};

AppHeader.propTypes = {
  transparent: PropTypes.bool
};

AppHeader.defaultProps = {
  transparent: false
};

export default AppHeader;
