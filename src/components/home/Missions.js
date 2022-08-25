import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/actions/index';
import MissionsItem from './MissionsItem';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div>
      <Table responsive="md" striped border hover>
        <thead>
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border">.</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionsItem
              key={mission.id}
              id={mission.id}
              name={mission.rocketName}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
