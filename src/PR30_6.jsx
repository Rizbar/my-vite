import { useReducer } from 'react';
import ReactDOM from "react-dom/client";

const initialState = { count: 0 };

function reducer(state) {
  return {
    count: state.count + 1
  };
}

function HitungComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Hitung: {state.count}</p>
      <button onClick={() => dispatch()}>Tambah</button>
    </div>
  );
}

export default HitungComponent;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HitungComponent />);