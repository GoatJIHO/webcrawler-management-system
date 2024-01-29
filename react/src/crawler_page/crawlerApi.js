import axios from 'axios';

export default async function getCrawlerData(){
  const data = await axios.get("http://localhost:8000/api/site/")

  return data.data
}