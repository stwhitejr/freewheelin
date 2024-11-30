import {TripContext} from 'pages/Trip';
import {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export interface NavProps {}

const Nav = (props: NavProps) => {
  const navigate = useNavigate();
  const {tripId, entryId} = useParams();
  const {trip} = useContext(TripContext);
  return (
    <div>
      nav:{' '}
      {entryId && tripId && (
        <button onClick={() => navigate(`/trip/${tripId}`)}>{trip.name}</button>
      )}
    </div>
  );
};

export default Nav;
