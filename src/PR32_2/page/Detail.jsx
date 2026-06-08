import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const todoItems = useSelector((state) => state.todo.todoItems);
  const votes = useSelector((state) => state.vote.votes);
  const item = todoItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <p>Todo tidak ditemukan</p>
        <button onClick={() => navigate('/')}>Kembali</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Detail Todo</h2>
      <p>ID: {item.id}</p>
      <p>Text: {item.text}</p>
      <p>Votes: {votes[item.id] || 0}</p>
      <button onClick={() => navigate('/')}>Kembali ke List</button>
    </div>
  );
}

export default Detail;