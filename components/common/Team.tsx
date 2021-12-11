// @ts-ignore
import Box from 'grommet/components/Box';
import TeamCard from './TeamCard';

type Props = {
  settings: any;
  authors: any[];
};

const Team = ({ authors = [], settings }: Props) => {
  const members = settings.team.map((member: any) => {
    const teamMember = authors.find((item) => {
      const author = item.frontMatter.data;
      return member.author === author.title;
    });

    const person = teamMember?.frontMatter?.data;

    return (
      <TeamCard
        key={person?.title}
        // @ts-ignore
        pad={{ horizontal: 'none' }}
        heading={person?.title}
        description={person?.description}
        thumbnail={person?.author_image}
        basis="1/3"
      />
    );
  });

  return (
    <Box direction="row" basis="full" justify="between" pad="medium">
      {members}
    </Box>
  );
};

export default Team;
