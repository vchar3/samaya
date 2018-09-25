import axios from 'axios';

export default baseURL = axios.create({
  //for local
  //baseURL: 'http://localhost:3000/api/'
  
  //for server
  baseURL: 'http://35.237.110.220:3001/api/'
});

