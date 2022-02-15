import axios from 'axios';
const baseURL = '/api/notes';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseURL);
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = async (newObject) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(baseURL, newObject, config);
  return response.data;
};
const update = (id, newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
};

const notes = {
  getAll,
  create,
  update,
  setToken,
};

export default notes;
