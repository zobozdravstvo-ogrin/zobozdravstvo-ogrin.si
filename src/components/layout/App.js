import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from 'grommet/utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.APP;

export default class App extends Component {
  render() {
    const {
      centered,
      children,
      className,
      inline,
      lang,
      ...props
    } = this.props;

    const classes = classnames(
      'grommet',
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--centered`]: centered,
        [`${CLASS_ROOT}--inline`]: inline
      },
      className
    );

    return (
      <div lang={lang} className={classes} {...props}>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  lang: PropTypes.string,
  centered: PropTypes.bool,
  inline: PropTypes.bool
};

App.defaultProps = {
  centered: true
};
