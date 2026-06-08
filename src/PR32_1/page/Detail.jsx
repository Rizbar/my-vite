import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

function Detail() {
  const { id } = useParams();
  const { todoItems } = useContext(TodoContext);
  const navigate = useNavigate();

  const item = todoItems.find((todo) => todo.id === parseInt(id));

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
      <button onClick={() => navigate('/')}>Kembali ke List</button>
    </div>
  );
}

export default Detail;