import { get } from 'axios';
import data from './data';

const { baseUrl, apiKey } = data;

const getDetailTeams = async (id) => {
  try {
    const response = await get(`${baseUrl}/v2/teams/${id}`, {
      headers: { 'X-Auth-Token': apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getDetailTeams;
