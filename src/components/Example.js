import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h3>Sus click son {count}</h3>
      <button onClick={() => setCount(count + 1)} >Undeme</button>
    </React.Fragment>
  )
}

export default Example