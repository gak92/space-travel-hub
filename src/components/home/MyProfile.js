import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div>
        <h2>My Missions</h2>
      </div>

      <div>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocketName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
