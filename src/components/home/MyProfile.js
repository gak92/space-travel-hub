import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="d-flex">
      <div className="flex-fill">
        <h2 className="px-4">My missions</h2>
        <ul className="d-flex flex-column bd-highlight mb-3">
          {reservedMissions.map((mission) => (
            <li className="p-2 border" key={mission.id}>
              {mission.rocketName}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-fill">
        <h2 className="px-4">My Rockets</h2>
        <ul className="d-flex flex-column bd-highlight mb-3">
          {reservedRockets.map((rocket) => (
            <li className="p-2 border" key={rocket.id}>{rocket.rocketName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
