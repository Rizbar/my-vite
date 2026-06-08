import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';
import { VoteContext } from '../contexts/VoteContext';

function TodoList() {
  const { todoItems, selectTodo } = useContext(TodoContext);
  const { votes, incrementVote } = useContext(VoteContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    selectTodo(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h2>Daftar Todo</h2>
      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>
            <div onClick={() => handleClick(item.id)} style={{ cursor: 'pointer' }}>
              {item.text}
            </div>
            <div>
              Vote: {votes[item.id] || 0}
              <button onClick={() => incrementVote(item.id)}>Vote</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;