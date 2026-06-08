import { useContext } from 'react';
import { UserContext } from './UserContext';

function CommentUser() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h3>Comments for {userName}</h3>
      {/* Daftar komentar */}
    </div>
  );
}

export default CommentUser;