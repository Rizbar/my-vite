import { VoteProvider } from '../contexts/VoteContext';
import { TodoProvider } from '../contexts/TodoContext';
import UserSelect from '../components/UserSelect';
import TodoList from '../components/TodoList';

function Home() {
  return (
    <VoteProvider>
      <TodoProvider>
        <div>
          <h1>Todo List App</h1>
          <UserSelect />
          <TodoList />
        </div>
      </TodoProvider>
    </VoteProvider>
  );
}

export default Home;