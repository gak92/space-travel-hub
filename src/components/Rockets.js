import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRockets from '../redux/actions/index';
// import * as api from '../api';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets);

  // api.getRockets();
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocketName}</h2>
          <p>{rocket.description}</p>
          <img src={rocket.flickrImages} alt={rocket.rocketName} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
