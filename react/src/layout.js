import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import Button from '@mui/material/Button';

const Layout = () =>{
  return(
    <div>    
      <header>
        <Link to="/create">
          <Button variant="contained">추가</Button>
        </Link>  
        <Link to='/'>
          <Button variant='contained'>조회</Button>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
export default Layout;