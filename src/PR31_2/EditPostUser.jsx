import { useParams } from 'react-router-dom';

function EditPostUser() {
  const { post_id } = useParams();

  return (
    <div>
      <h3>Edit Post ID: {post_id}</h3>
    </div>
  );
}

export default EditPostUser;