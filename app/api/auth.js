import client from './client.js';

const login = (email, password) => client.post('/login', {email, password});

const register = (name, email, password) => client.post('/register', {name, email, password});

export default {login, register};