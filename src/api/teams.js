import { get } from 'axios';
import data from './data';

const { baseUrl, apiKey } = data;

const getDetailTeams = async (id) => {
  try {
    const detailData = await get(`${baseUrl}v2/teams/${id}`, {
      headers: { 'X-Auth-Token': apiKey },
    });

    // offline
    if ('caches' in window) {
      return caches.match(`${baseUrl}v2/teams/${id}`).then((response) => {
        if (response) {
          console.log('locall');
          return response.json().then((value) => value);
        }
        // online
        console.log('on-1');
        return detailData.data;
      });
    }
    console.log('onl-2');
    return detailData.data;
  } catch (error) {
    return error;
  }
};

export default getDetailTeams;
