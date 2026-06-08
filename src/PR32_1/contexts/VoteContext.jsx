import { createContext, useState } from 'react';

const VoteContext = createContext();

export function VoteProvider({ children }) {
  const [votes, setVotes] = useState({}); // { id: voteCount }

  const incrementVote = (id) => {
    setVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, incrementVote }}>
      {children}
    </VoteContext.Provider>
  );
}

export { VoteContext };