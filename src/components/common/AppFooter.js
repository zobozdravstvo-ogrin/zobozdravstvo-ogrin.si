import React from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import settingsData from '@mapbox/batfish/data/settings-data';

const AppFooter = ({ isCenter, ...rest }) => {
  return (
    <Footer
      className="app-footer"
      pad={{ vertical: 'small', horizontal: 'small', between: 'small' }}
      wrap={true}
      direction="row"
      justify="center"
      {...rest}
    >
      <Box
        className="footer-container"
        size={{ width: { max: 'xxlarge' } }}
        direction="row"
        responsive={true}
        justify="between"
        align="center"
        pad={{ horizontal: 'none', between: 'small' }}
        flex="grow"
      >
        <Box className="secondary" pad={{horizontal: 'medium'}}>
          {settingsData.footer.copy} {settingsData.tel}
        </Box>
        <Box
          direction="row"
          pad={{ vertical: 'small', horizontal: 'none', between: 'medium' }}
          align="center"
          responsive={false}
        >
          {settingsData.footer.links.map(item => {
            return (
              <a key={item.link} href={item.link} className="text-link">
                {item.name}
              </a>
            );
          })}
        </Box>
      </Box>
    </Footer>
  );
};

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
