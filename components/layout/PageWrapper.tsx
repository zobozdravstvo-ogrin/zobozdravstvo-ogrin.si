// @ts-ignore
import Box from 'grommet/components/Box';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

type Props = {
  children: React.ReactNode;
  settings: any;
};

const PageWrapper = ({ settings, children }: Props) => {
  return (
    <Box className="app-container">
      <AppHeader settings={settings} />
      {children}
      <AppFooter settings={settings} />
    </Box>
  );
};

export default PageWrapper;
