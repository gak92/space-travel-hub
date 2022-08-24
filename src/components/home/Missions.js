import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/actions/index';
import MissionsItem from './MissionsItem';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      {missions.map((mission) => (
        <MissionsItem
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
    </div>
  );
}

export default Missions;
