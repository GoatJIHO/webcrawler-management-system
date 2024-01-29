import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout = () =>{
  return(
    <div>    
      <header>
        <Link to="/create">추가</Link>
        <Link to='/'>조회</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>

  );
}
export default Layout;