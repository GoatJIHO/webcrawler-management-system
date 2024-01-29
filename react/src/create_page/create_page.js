import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './css/createpage.module.css';
import { postCrawlerSite } from './api/createPageApi';

const CreatePage = () => {
  const [siteName, setSiteName] = useState();

  const handleSubmit = async () => {
    const formData = new FormData();
    
    formData.append('site_name', siteName);

    postCrawlerSite(formData);
  }

  return(
    <div className={styles.createBox}>
      <TextField id="outlined-basic" label="사이트" 
                  variant="outlined"
                  onChange={(e) => setSiteName(e.target.value)} />
      <Button variant='contained'
              onClick={handleSubmit}>사이트 추가</Button>
    </div>
  );
}
export default CreatePage;