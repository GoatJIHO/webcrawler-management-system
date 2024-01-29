
import {Route, Routes} from 'react-router-dom';

import Layout from "./layout";
import CrawlerPage from "./crawler_page/crawler_page";
import CreatePage from './create_page/create_page';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index  element={<CrawlerPage />} />
        <Route path='/create' element={<CreatePage />} />
      </Route>

    </Routes>
    
  );
}

export default App;
