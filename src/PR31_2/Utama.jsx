import { Link, Outlet } from 'react-router-dom';

function Utama() {
  return (
    <div>
      <h1>Halaman Utama</h1>
      <nav>
        <ul>
          <li><Link to="/list-user">List User</Link></li>
          <li><Link to="/list-user-context">List User Context</Link></li>
          <li><Link to="/post-user">Post User</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Utama;