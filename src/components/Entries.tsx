import {TripContext} from 'pages/Trip';
import {useContext} from 'react';
import Card from './Card';
import styled from 'styled-components';

const StyledEntries = styled.div<{}>`
  display: flex;
`;

const Entries = () => {
  const {entries} = useContext(TripContext);
  return (
    <StyledEntries>
      {entries.map((entry) => (
        <Card
          key={entry.name}
          id={entry.id}
          title={entry.name}
          description={entry.description}
          image={entry.photo}
        />
      ))}
    </StyledEntries>
  );
};

export default Entries;
