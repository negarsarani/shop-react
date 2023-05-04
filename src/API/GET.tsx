import axios from 'axios';

const getData = (endpoint) => {
  const response = axios.get(`http://localhost:3000/${endpoint}`);
  return response;
};

export default getData;
