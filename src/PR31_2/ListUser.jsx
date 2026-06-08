import { Link } from 'react-router-dom';

function ListUser() {
  const users = [
    { id: 1, name: 'User Satu' },
    { id: 2, name: 'User Dua' },
  ];

  return (
    <div>
      <h2>Daftar User</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <Link to={`/detail-user/${user.id}`}>Detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;