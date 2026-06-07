import { useRef, useState } from 'react';

export default function PR29_4 () {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    setValue(inputValue);
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}