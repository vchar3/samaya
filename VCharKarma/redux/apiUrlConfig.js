import axios from 'axios';

let url, webSocketUrl;
//local url for testing
//url = 'http://localhost:3000/api/';
//webSocketUrl = 'http://localhost:4000';

//dev url 
url = 'http://35.237.139.25:3000/api/';
webSocketUrl = 'http://35.237.139.25:4000';

const baseURL = axios.create({
  baseURL: url
});

export {
  baseURL,
  webSocketUrl,
  url
};