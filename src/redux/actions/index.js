import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from '../types';

const URL = 'https://api.spacexdata.com/v3';

export const getRockets = createAsyncThunk(actions.GET_ROCKETS,
  async () => {
    const { data } = await axios.get(`${URL}/rockets`);

    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images[0],
      reserved: false,
    }));

    return rockets;
  });

export const getMissions = createAsyncThunk(actions.GET_MISSIONS,
  async () => {
    const { data } = await axios.get(`${URL}/missions`);

    const missions = data.map((mission) => ({
      id: mission.mission_id,
      rocketName: mission.mission_name,
      description: mission.description,
    }));

    return missions;
  });

export const rocketReservation = (id) => ({
  type: actions.ROCKET_RESERVED,
  payload: id,
});
