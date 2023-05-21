import axios from 'axios';

axios.defaults.baseURL = 'https://64676b722ea3cae8dc2e4c6f.mockapi.io/';

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/twitter?page=${page}&limit=6`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, userFollowers) => {
  try {
    const response = await axios.put(`/tweets/${userId}`, {
      followers: userFollowers,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
