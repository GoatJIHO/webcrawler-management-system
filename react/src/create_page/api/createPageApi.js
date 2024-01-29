import axios from 'axios';

export async function postCrawlerSite(createsiteinfo) {
  const response = await axios.post("http://localhost:8000/api/site/", createsiteinfo, {
    headers: {
      'Content-Type':  'application/json', // 변경된 부분
    },
  });
return response;
  
};