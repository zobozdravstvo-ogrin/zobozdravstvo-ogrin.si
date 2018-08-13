import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import authors from '@mapbox/batfish/data/authors';
import settingsData from '@mapbox/batfish/data/settings-data';
import TeamCard from './TeamCard';

class Team extends Component {
  render() {
    const members = settingsData.team.map(member => {
      const { frontMatter: author } = member;

      const teamMember = authors.find((item) => {
        const author = item.frontMatter;
        return member.author === author.title;
      });

      const person = teamMember.frontMatter;

      return (
        <TeamCard
          key={person.title}
          pad={{ horizontal: 'none' }}
          heading={person.title}
          description={person.description}
          thumbnail={person.author_image}
          basis="1/3"
        />
      );
    });

    // <h2>{settingsData.team_title}</h2>
    return (
      <Box direction="row" basis="full" justify="between" pad="medium">
        {members}
      </Box>
    );
  }
}

Team.propTypes = {};
Team.defaultProps = {};

export default Team;
