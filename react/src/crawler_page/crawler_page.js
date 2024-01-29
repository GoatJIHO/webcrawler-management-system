import Button from '@mui/material/Button';
import React, {useState} from "react";
import GetCrawlerData from './crawlerApi';

const CrawlerPage = () => {
  const [siteData, setSiteData] = useState([]);

  async function fetchData(){
    try{
      const data = await GetCrawlerData();
      setSiteData(data);
    }catch(error){
      console.error("실패");
    }
  }

  const handleClick = () =>{
    fetchData();
  }
  return(
    <div>
      <Button onClick={handleClick} variant="contained">Contained</Button>
      <div>
        {siteData.map((item, index) => (
          <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Site Name: {item.site_name}</p>
          <p>Last Update: {item.last_update}</p>
        </div>
        ))}
      </div>
    </div>
  );
}
export default CrawlerPage;