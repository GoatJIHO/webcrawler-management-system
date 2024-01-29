import axios from 'axios';

export default async function GetCrawlerData(){
  const data = await axios.get("http://localhost:8000/api/site/")

  return data.data
}