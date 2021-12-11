import React, { Component } from 'react';
import classnames from 'classnames';

// @ts-ignore
import CSSClassnames from 'grommet/utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.APP;

type Props = {
  children: React.ReactNode;
  className?: string;
  lang?: string;
  centered?: boolean;
  inline?: boolean;
};

const App = ({
  centered = true,
  children,
  className,
  inline,
  lang,
  ...props
}: Props) => {
  const classes = classnames(
    'grommet',
    CLASS_ROOT,
    {
      [`${CLASS_ROOT}--centered`]: centered,
      [`${CLASS_ROOT}--inline`]: inline,
    },
    className
  );

  return (
    <div lang={lang} className={classes} {...props}>
      {children}
    </div>
  );
};

export default App;
