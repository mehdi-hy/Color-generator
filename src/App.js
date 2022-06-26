import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);

      setList(colors);
      setColor('#');
    } catch {
      setError(true);
      console.log(error);
    }
  };
  return (
    <section className='section'>
      <div className='container'>
        <h3>color generator</h3>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            id='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </div>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor {...color} key={index} index={index} />;
        })}
      </section>
    </section>
  );
}

export default App;
