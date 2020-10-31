import { get } from 'axios';
import data from './data';

const { baseUrl, apiKey } = data;

const getDetailTeams = async (id) => {
  try {
    // offline
    if ('caches' in window) {
      return caches.match(`${baseUrl}v2/teams/${id}`).then((response) => {
        if (response) {
          return response.json().then((value) => value);
        }
        return null;
      });
    }

    const response = await get(`${baseUrl}v2/teams/${id}`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getDetailTeams;
