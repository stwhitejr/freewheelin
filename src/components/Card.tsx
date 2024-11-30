import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div<{image:string}>`
  background: ${(props) => `url(${props.image})`};
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;
  aspect-ratio: 1/1
`;

export interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Card = (props: CardProps) => {
  const navigate = useNavigate();
  return (
    <StyledCard image={props.image}>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
      <button
        onClick={() => navigate(`./entry/${props.id}`, {relative: 'route'})}
      >
        Go to entry
      </button>
    </StyledCard>
  );
};

export default Card;
