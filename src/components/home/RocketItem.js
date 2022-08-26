import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
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
    <div className="my-4">
      <div key={id} className="d-flex gap-3">
        <img className="w-25" src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>
            <span>
              {reserved && (
                <Badge bg="primary" className="mx-2 p-2">Reserved</Badge>
              )}
            </span>
            {description}
          </p>
          <Button
            type="button"
            id={id}
            onClick={handleReservation}
            variant={reserved ? 'outline-secondary' : 'primary'}
          >
            {buttonText}
          </Button>
        </div>
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
