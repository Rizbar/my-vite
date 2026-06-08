import { useContext } from 'react';
import { UserContext } from './UserContext';

function ListUser() {
  const { setUserName } = useContext(UserContext);

  const handleClick = (name) => {
    setUserName(name);
  };

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
            {user.name} -{' '}
            <button onClick={() => handleClick(user.name)}>Pilih User</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;