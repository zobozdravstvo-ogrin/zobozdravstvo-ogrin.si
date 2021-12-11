// @ts-ignore
import Header from 'grommet/components/Header';
// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Menu from 'grommet/components/Menu';
// @ts-ignore
import Anchor from 'grommet/components/Anchor';
import Logo from './Logo';
import Link from 'next/link';

type Props = {
  settings: any;
};

const AppHeader = ({ settings }: Props) => {
  const menuItems = settings.header.links.map((item: any) => {
    return (
      <Link key={item.link} href={item.link} passHref>
        <Anchor>{item.name}</Anchor>
      </Link>
    );
  });

  return (
    <Header
      className="app-header"
      justify="center"
      pad={{ horizontal: 'small', vertical: 'none' }}
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
        <Link href="/" passHref>
          <Anchor className="app-logo" style={{ textDecoration: 'none' }}>
            <Logo title={settings.site_title} />
            <div className="app-title">
              <span>{settings.short_title}</span>
            </div>
          </Anchor>
        </Link>
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

export default AppHeader;
