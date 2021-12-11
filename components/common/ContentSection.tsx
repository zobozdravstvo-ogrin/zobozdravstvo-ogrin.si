type Props = {
  sections: any[];
  name: string;
  render: Function;
};

const ContentSection = ({ name, render, sections = [] }: Props) => {
  const section = sections.find((item) => {
    return item.keyname === name;
  });

  return section && render && typeof render === 'function'
    ? render(section)
    : null;
};

export default ContentSection;
