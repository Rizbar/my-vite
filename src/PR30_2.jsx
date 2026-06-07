import { useState, useEffect }  from 'react';
import ReactDOM from "react-dom/client";

function Contoh() {
  const [message, setMessage] = useState('Mount');

  useEffect(() => {
    return () => {
      setMessage('Unmount');
    };
  }, []);

  const handleClick = () => {
    setMessage('Updated');
  };

  return (
    <div>
      <p>Message: {message}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Contoh;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contoh />);