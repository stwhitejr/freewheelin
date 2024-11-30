import useTrips from 'hooks/useTrips';
import {useNavigate} from 'react-router-dom';

const Trips = () => {
  const navigate = useNavigate();
  const {trips, isLoading} = useTrips();

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      {trips.map((trip) => (
        <div>
          {trip.name}{' '}
          <button onClick={() => navigate(`/trip/${trip.id}`)}>
            go to trip
          </button>
        </div>
      ))}
    </div>
  );
};

export default Trips;
