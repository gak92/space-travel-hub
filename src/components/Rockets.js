import React from 'react';
import * as api from '../api';

function Rockets() {
  api.getRockets();
  return (
    <div>
      Rockets
    </div>
  );
}

export default Rockets;
