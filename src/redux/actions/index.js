import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from '../types';

const URL = 'https://api.spacexdata.com/v3';

const getRockets = createAsyncThunk(actions.GET_ROCKETS,
  async () => {
    const { data } = await axios.get(`${URL}/rockets`);

    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images[0],
    }));

    // console.log('from API:', rockets);
    return rockets;
  });

export default getRockets;
