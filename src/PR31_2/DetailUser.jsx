import { useParams, Link, Outlet } from 'react-router-dom';

function DetailUser() {
  const { user_id } = useParams();

  // Data dummy
  const user = { id: user_id, name: `User ${user_id}` };

  return (
    <div>
      <h2>Detail User: {user.name}</h2>
      <nav>
        <ul>
          <li><Link to="post">Post User</Link></li>
          <li><Link to="comment">Comment User</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default DetailUser;