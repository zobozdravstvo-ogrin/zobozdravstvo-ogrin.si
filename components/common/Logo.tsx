import React from 'react';
// @ts-ignore
import Box from 'grommet/components/Box';
import Image from 'next/image';

type Props = {
  pad?: 'small' | 'medium' | 'large';
  title?: string;
};

const Logo = ({ title, pad }: Props) => {
  return (
    <Box align="center" pad={pad}>
      <Image src="/images/favicon.png" alt={title} width={48} height={48} />
    </Box>
  );
};

export default Logo;
