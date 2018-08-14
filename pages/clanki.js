/*---
title: Članki
description: Seznam člankov
---*/

import PageWrapper from '../src/components/layout/PageWrapper';
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import articles from '@mapbox/batfish/data/articles';
import AppHeader from '../src/components/common/AppHeader';
import AppFooter from '../src/components/common/AppFooter';
import ArticleCard from '../src/components/common/ArticleCard';

class index extends Component {
  render() {
    const { frontMatter } = this.props;
    console.log(articles);

    const articlesEl = articles
      .filter(item => {
        return item.frontMatter.published;
      })
      .map(article => {
        if (!article.frontMatter.author) {
          return null;
        }

        const content = article.frontMatter;

        return (
          <ArticleCard
            key={content.title}
            pad={{ horizontal: 'none' }}
            heading={content.title}
            description={content.sub_title}
            thumbnail={content.image}
            author={content.author}
            date={content.date}
            link={article.path}
            basis="1/3"
          />
        );
      });

    return (
      <PageWrapper {...this.props}>
        <Box className="app-container">
          <AppHeader />
          <Section pad="none" align="center">
            <Box
              direction="row"
              justify="start"
              size={{ width: 'xxlarge' }}
              pad={{
                horizontal: 'small',
                vertical: 'medium',
                between: 'large'
              }}
            >
              <Box pad="none" direction="column">
                <h2>{frontMatter.title}</h2>
                <Box
                  direction="row"
                  basis="full"
                  justify="start"
                  pad="none"
                  responsive={true}
                >
                  {articlesEl}
                </Box>
              </Box>
            </Box>
          </Section>
          <AppFooter />
        </Box>
      </PageWrapper>
    );
  }
}

index.propTypes = {};
index.defaultProps = {};

export default index;
