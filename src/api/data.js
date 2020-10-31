const data = {
  baseUrl: 'http://api.football-data.org/',
  apiKey: '0fb5b15aaa624ab28734d37f94f2a1ca',
};

const fetchData = (url, entryPoint) => {
  if ('caches' in window) {
    caches.match(`${url}${entryPoint}`).then((response) => {
      console.log(response);
      if (response) {
        response.json().then((value) => value.data);
      }
    });
  }
};

export { data, fetchData };
