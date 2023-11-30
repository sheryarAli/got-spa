// gotService.js
import axios from 'axios';

const apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

export const getHouses = () => axios.get(`${apiUrl}/houses`);
export const getPeople = () => axios.get(`${apiUrl}/characters`);
export const getPeopleWithImages = () => axios.get(`https://thronesapi.com/api/v2/Characters`);
// 
export const getQuotes = () => axios.get(`${apiUrl}/random/5`);

// TODO: update to make code clean. 
export const getHouseDetailsByName = (houseName) => axios.get(`${apiUrl}/house/${houseName}`).then(response => ({
    house: response.data,
    // members: response.data.swornMembers,
  }));

  export const getPersonDetailsByName = (personName) => axios.get(`${apiUrl}/character/${personName}`).then(response => ({
    person: response.data,
    // members: response.data.swornMembers,
  }));
