import { useState } from 'react';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id:'1',
      title: 'Make something to eat',
      isComplete: false,
    },
    {
      id:'2',
      title: 'Wake up & pray',
      isComplete: false,
    },
    {
      id:'3',
      title: 'Grab something to eat',
      isComplete: false,
    }
  ])
  return (
    <div className="mt-32 flex place-content-center">
      <div className="w-full max-w-md">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-teal-300">
        <h1 className="text-3xl font-bold">
          Todo Application
        </h1>
        <div className="mb-4">
      <label 
        className="block text-700 font-bold m-2" 
        for="newItem"
      >
        Add new Item
      </label>
      <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
        id="newItem" 
        type="text" 
        placeholder="Add new todo Item"
      />
       <ul>
        {todos.map((todo) =>
          <li
            className="block text-100 text-3xl font mb-4"
            key={todo.id}
          >
            {todo.title}
          </li>
      )}
    </ul>
    </div>
    <div className="flex justify-center m-16">
      <button 
        className="text-white font-bold py-2 px-4 border border-black rounded"
        type="button"
      >
        Clear
      </button>
      </div>
      </form>
      </div>
    </div>
    
  );
}

export default App;
