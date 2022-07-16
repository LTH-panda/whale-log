import axios from 'axios';

const {APP_SERVER_BASE_URL} = process.env;

const server = axios.create({
  baseURL: `${APP_SERVER_BASE_URL}/api`,
});

export default server;
