import { get } from 'axios';
import data from './data';

const { baseUrl, apiKey } = data;

const getCompetitions = async (id) => {
  try {
    // offline
    if ('caches' in window) {
      return caches
        .match(`${baseUrl}v2/competitions/${id}`)
        .then((response) => {
          if (response) {
            return response.json().then((value) => value);
          }
          return null;
        });
    }

    // online
    const response = await get(`${baseUrl}v2/competitions/${id}`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getTeams = async (id) => {
  try {
    // offline
    if ('caches' in window) {
      return caches
        .match(`${baseUrl}v2/competitions/${id}/teams`)
        .then((response) => {
          if (response) {
            return response.json().then((value) => value);
          }
          return null;
        });
    }

    // online
    const response = await get(`${baseUrl}v2/competitions/${id}/teams`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getCompetitions, getTeams };
