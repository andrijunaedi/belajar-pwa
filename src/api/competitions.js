import { get } from 'axios';
import { data, fetchData } from './data';

const { baseUrl, apiKey } = data;

const getCompetitions = async (id) => {
  try {
    fetchData(baseUrl, `v2/comcompetitions/${id}`);
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
    const response = await get(`${baseUrl}v2/competitions/${id}/teams`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getCompetitions, getTeams };
