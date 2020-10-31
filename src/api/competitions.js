import { get } from 'axios';
import data from './data';

const { baseUrl, apiKey } = data;

const getCompetitions = async (id) => {
  try {
    // online

    // offline
    if ('caches' in window) {
      return caches
        .match(`${baseUrl}v2/competitions/${id}`)
        .then(async (response) => {
          if (response) {
            return response.json().then((value) => value);
          }

          const competitions = await get(`${baseUrl}v2/competitions/${id}`, {
            headers: { 'X-Auth-Token': apiKey },
          });
          return competitions.data;
        });
    }

    const competitions = await get(`${baseUrl}v2/competitions/${id}`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return competitions.data;
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
        .then(async (response) => {
          if (response) {
            return response.json().then((value) => value);
          }
          // online
          const teams = await get(`${baseUrl}v2/competitions/${id}/teams`, {
            headers: { 'X-Auth-Token': apiKey },
          });
          return teams.data;
        });
    }
    // online
    const teams = await get(`${baseUrl}v2/competitions/${id}/teams`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return teams.data;
  } catch (error) {
    return error;
  }
};

export { getCompetitions, getTeams };
