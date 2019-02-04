import axios from 'axios';

//local url for testing
let  localhostUrl = 'http://localhost:3000/api/';
let localWebSocketUrl = 'http://localhost:4000';

//dev url 
let devAppUrl = 'http://35.237.139.25:3000/api/';
let devWebSocketUrl = 'http://35.237.139.25:4000';
const baseURL = axios.create({
  //for local host
  baseURL: localhostUrl
  
  //for dev server
  //baseURL: devAppUrl;
});

//for local host
const webSocketUrl = localWebSocketUrl;

//for dev server 
//const webSocketUrl = devWebSocketUrl;

export { baseURL, webSocketUrl, localhostUrl };

