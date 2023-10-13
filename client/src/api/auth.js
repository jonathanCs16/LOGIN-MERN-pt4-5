import axios from 'axios';

const API = 'http://localhost:5002/api';

export const registerRequest = user => axios.post(`${API}/register`, user);