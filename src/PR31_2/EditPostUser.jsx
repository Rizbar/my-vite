import { useParams } from 'react-router-dom';

function EditPostUser() {
  const { postId } = useParams();

  return (
    <div>
      <h3>Edit Post ID: {postId}</h3>
    </div>
  );
}

export default EditPostUser;