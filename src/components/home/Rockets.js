import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/actions/index';
import RocketItem from './RocketItem';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocketName}
          description={rocket.description}
          image={rocket.flickrImages}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
