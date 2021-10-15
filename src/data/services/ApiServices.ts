import axios from 'axios';

const url = 'https://ediaristas-workshop.herokuapp.com/';
//api/diaristas-cidade?cep=

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
});