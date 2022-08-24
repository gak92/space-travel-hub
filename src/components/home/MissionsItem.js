import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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
    <div key={id}>
      <h2>{ name }</h2>
      <p>{ description }</p>
      <button type="button" onClick={buttonHandler}>{buttonName}</button>
      <p>{ statusMission }</p>
    </div>
  );
};

export default MissionsItem;

MissionsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
