import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReservation } from '../../redux/actions';

const RocketItem = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();
  const buttonText = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  const handleReservation = (e) => {
    e.preventDefault();
    dispatch(rocketReservation(id));
  };

  return (
    <div>
      <div key={id}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>
          <span>{reserved && 'Reserved'}</span>
          {description}
        </p>
        <button type="button" id={id} onClick={handleReservation}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketItem;
