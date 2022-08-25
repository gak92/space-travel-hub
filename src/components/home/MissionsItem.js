import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { missionsActions } from '../../redux/actions';

const MissionsItem = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const buttonName = reserved ? 'Leave Mission' : 'Join Mission';
  const statusMission = reserved ? 'Active member' : 'NOT A MEMBER';

  const buttonHandler = () => {
    dispatch(missionsActions(id));
  };

  return (
    <tr key={id}>
      <td className="align-middle border">
        <h3>{ name }</h3>
      </td>
      <td className="align-middle border">
        <p>{ description }</p>
      </td>
      <td className="align-middle border">
        <Badge bg={reserved ? 'primary' : 'secondary'} className="p-2 align-middle">
          { statusMission }
        </Badge>
      </td>
      <td className="align-middle border p-4">
        <Button
          type="button"
          onClick={buttonHandler}
          variant={reserved ? 'outline-danger' : 'outline-secondary'}
          style={{ minWidth: '150px' }}
        >
          {buttonName}
        </Button>
      </td>
    </tr>
  );
};

export default MissionsItem;

MissionsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
