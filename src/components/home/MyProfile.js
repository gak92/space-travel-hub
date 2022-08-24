import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <div>
        <h2>My missions</h2>
        <hr className="horizontal-line" />
        <div>
          {reservedMissions.map((rocket) => (
            <div key={rocket.id}>
              <h3>{rocket.rocketName}</h3>
            </div>
          ))}
        </div>
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
