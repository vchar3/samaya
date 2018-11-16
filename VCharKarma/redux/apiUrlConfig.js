import axios from 'axios';

const baseURL = axios.create({
  //for local host
  baseURL: 'http://localhost:3000/api/'
  
  //for dev server
  //baseURL: 'http://35.237.139.25:3000/api/'
});

//for local host
const webSocketUrl = 'http://localhost:4000';

//for dev server 
//const webSocketUrl = 'http://35.237.139.25:4000';

export { baseURL, webSocketUrl };

