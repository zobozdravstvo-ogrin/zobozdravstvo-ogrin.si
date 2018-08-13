import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import authors from '@mapbox/batfish/data/authors';
import ImageHeader from '../common/ImageHeader';
import TeamCard from '../common/TeamCard';
import GalleryDisplay from '../common/GalleryDisplay';
import moment from 'moment';

class ArticleLayout extends Component {
  render() {
    const { frontMatter } = this.props;

    const photos = frontMatter.gallery;
    const teamMember = authors.find((item) => {
      const author = item.frontMatter;
      return frontMatter.author === author.title;
    });

    const person = teamMember.frontMatter;

    return (
      <Fragment>
        {
          frontMatter.image && (
            <Section pad="none" align="center">
              <ImageHeader alt={frontMatter.title} src={frontMatter.image} />
            </Section>
          )
        }
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'small', vertical: 'medium', between: 'large'}}>
            <Box basis="2/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              <h2>{frontMatter.title}</h2>
              <h3>{frontMatter.sub_title}</h3>
              <h4>{moment(frontMatter.date).format('DD.MM.YYYY')}</h4>
              <div className="body-container">
                {this.props.children}
              </div>
              <GalleryDisplay photos={photos} />
            </Box>
            <Box basis="1/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              <TeamCard
                key={person.title}
                pad={{ horizontal: 'none', vertical: 'medium' }}
                heading={person.title}
                description={person.description}
                thumbnail={person.author_image}
                basis="1/3"
              />
            </Box>
          </Box>
        </Section>
      </Fragment>
    );
  }
}

ArticleLayout.propTypes = {
  frontMatter: PropTypes.object
};

ArticleLayout.defaultProps = {};

export default ArticleLayout;
