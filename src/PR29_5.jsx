import { useState } from "react";

const PR29_5 = () => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Usernamenya, ${userName}!`);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={userName} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PR29_5;