import { Link } from 'react-router-dom';

function PostUser() {
  return (
    <div>
      <h3>Post User</h3>
      <Link to="/edit-post/123">Edit Post 123</Link>
    </div>
  );
}

export default PostUser;