import axios from 'axios';

const baseURL = axios.create({
  //for local host
  baseURL: 'http://localhost:3000/api/'
  
  //for server
  //baseURL: 'http://35.237.110.220:3001/api/'
});

//for local host
const webSocketUrl = 'http://localhost:4000';

//for dev server 
//const webSocketUrl = 'http://35.237.110.220:4000';

export { baseURL, webSocketUrl };

