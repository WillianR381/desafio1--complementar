import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": true,
          "Access-Control-Allow-Credentials": true,
  }
});