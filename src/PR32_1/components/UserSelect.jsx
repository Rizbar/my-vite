import { useState } from 'react';

function UserSelect() {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <label>Pilih User: </label>
      <select value={user} onChange={handleChange}>
        <option value="">--Pilih User--</option>
        <option value="User1">User 1</option>
        <option value="User2">User 2</option>
      </select>
    </div>
  );
}

export default UserSelect;