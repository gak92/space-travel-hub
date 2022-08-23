import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3';

export const getRockets = async () => {
  const res = await axios.get(`${URL}/rockets`);
  console.log(res);
};

export const getMissions = async () => {
  const res = await axios.get(`${URL}/missions`);
  console.log(res);
};
