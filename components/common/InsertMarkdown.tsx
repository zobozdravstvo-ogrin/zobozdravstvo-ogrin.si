import React from 'react';

type Props = {
  body: string;
};

const InsertMarkdown = ({ body }: Props) => {
  return (
    <div
      className="body-container"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};

export default InsertMarkdown;
