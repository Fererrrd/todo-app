'use client';

import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState(['']);
  const [Input, setInput] = useState('');
  const [hide, isHiding] = useState('');

  const clickHandler = () => {
    if (Input.trim() !== '') {
      setTodos([...todos, Input]);
      setInput('');
      isHiding('X');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <form action="">
          <input
            type="text"
            className="border-2 border-sky-600 outline-none rounded-2xl pl-4"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <button onClick={clickHandler}>Add Todo</button>
      </div>
      <div>
        {todos?.map((todo) => (
          <div className="flex">
            <h1>{todo}</h1>
            <button>{hide}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
