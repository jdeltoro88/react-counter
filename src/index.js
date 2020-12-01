import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';






function App() {

  const [count, setCount] = useState(0);
  const [title,setTitle] = useState('hello');

  return (
    <div className= 'counter'>
    <h1> React Counter</h1>
    <p className= 'click_desc'>
      your count is <span>{count > 0 ? count : 'IDK' }</span>
    </p>

    <div className = 'button_container'>

      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount( count * 5)}> *5 </button>
      <button onClick={() => setCount(0)}> reset </button>
    </div>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);