import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from '../features/todoSlice';
import { incrementVote } from '../features/voteSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const todoItems = useSelector((state) => state.todo.todoItems);
  const votes = useSelector((state) => state.vote.votes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVote = (id) => {
    dispatch(incrementVote(id));
  };

  const handleItemClick = (id) => {
    dispatch(selectTodo(id));
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      {/* Select User (optional, bisa ditambahkan nanti) */}
      {/* <UserSelect /> */}
      <ul>
        {todoItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => handleItemClick(item.id)}
            >
              {item.text}
            </div>
            <div>
              Vote: {votes[item.id] || 0}{' '}
              <button onClick={() => handleVote(item.id)}>Vote</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;