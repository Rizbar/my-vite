import { useState } from 'react';

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100%', border: '1px solid black' }} onMouseMove={handleMouseMove}>
      {render({ position })}
    </div>
  );
}

function PR29_3() {
  return (
    <div style={{ height: '100vh' }}>
      <MouseTracker
        render={({ position }) => (
          <h1>
            Mouse position: ({position.x}, {position.y})
          </h1>
        )}
      />
    </div>
  );
}

export default PR29_3;