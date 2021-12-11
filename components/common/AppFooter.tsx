// @ts-ignore
import Footer from 'grommet/components/Footer';
// @ts-ignore
import Box from 'grommet/components/Box';
import Link from 'next/link';

type Props = {
  settings: any;
  [k: string]: any;
};

const AppFooter = ({ settings, isCenter, ...rest }: Props) => {
  return (
    <>
      <style jsx>
        {`
          a.text-link1 {
            color: #525252 !important;
          }
          a.text-link1:hover {
            color: #000001 !important;
          }
        `}
      </style>
      <Footer
        colorIndex="neutral-2"
        className="app-footer"
        pad={{ vertical: 'small', horizontal: 'medium', between: 'small' }}
        wrap={true}
        direction="column"
        justify="center"
        {...rest}
        size="large"
      >
        {settings.footer.headline && <Box>{settings.footer.headline}</Box>}
        {settings.footer.body && <Box>{settings.footer.body}</Box>}
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
          <Box align="start" className="secondary" pad="none" direction="row">
            <Box pad="none">{settings.footer.copy}</Box>
            <Box pad={{ horizontal: 'small' }}>{settings.tel}</Box>
          </Box>
          <Box
            direction="row"
            pad={{ vertical: 'small', horizontal: 'none', between: 'medium' }}
            align="center"
            responsive={false}
          >
            {settings.footer.links.map((item: any) => {
              return (
                <Link key={item.link} href={item.link}>
                  <a className="text-link1">{item.name}</a>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Footer>
    </>
  );
};

export default AppFooter;
