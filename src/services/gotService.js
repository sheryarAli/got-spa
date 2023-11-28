// gotService.js
import axios from 'axios';

const apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

export const getHouses = () => axios.get(`${apiUrl}/houses`);
export const getPeople = () => axios.get(`${apiUrl}/characters`);
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

//   export const getHouseDetailsByName = async (houseName) => {
//     console.log(`${apiUrl}/${houseName}`)
//     try {
//       const response = await axios.get(`${apiUrl}/houses`);
//       const house = response.data.find(h => h.name === houseName);
  
//       if (!house) {
//         throw new Error(`House with name '${houseName}' not found.`);
//       }
  
//       const membersResponse = await axios.all(house.swornMembers.map(memberUrl => axios.get(memberUrl)));
//       const members = membersResponse.map(member => member.data);
  
//       return { house, members };
//     } catch (error) {
//       // Handle the error (e.g., log it, return a default value)
//       console.error(error);
//       return { house: {}, members: [] };
//     }
//   };