import { useParams, NavLink, Outlet } from 'react-router-dom';

function DetailUser() {
  const { user_id } = useParams();

  return (
    <div>
      <nav style={{ marginBottom: '10px' }}>
        <NavLink to="/" style={{ marginRight: '10px' }}>Home</NavLink>
        <NavLink to="/list-user" style={{ marginRight: '10px' }}>List User</NavLink>
        <NavLink to={`/detail-user/${user_id}`} style={{ marginRight: '10px' }} end>
          Detail User
        </NavLink>
        <NavLink to="post" style={{ marginRight: '10px' }}>Post</NavLink>
        <NavLink to="comment">Comment</NavLink>
      </nav>
      
      <h2>Detail User: {user_id}</h2>
      <Outlet />
    </div>
  );
}

export default DetailUser;