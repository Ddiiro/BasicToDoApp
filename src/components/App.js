import { useState } from "react";
import "../App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Make something to eat",
      isComplete: false,
    },
    {
      id: "2",
      title: "Wake up & pray",
      isComplete: false,
    },
    {
      id: "3",
      title: "Grab something to eat",
      isComplete: false,
    },
  ]);
  const [inputVaule, setInputVaule] = useState("");
  const [indexVaule, setIndexValue] = useState(4);
  function pickValue(e) {
    setInputVaule(e.target.value);
  }
  function handleAdd(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: indexVaule,
        title: inputVaule,
        isComplete: false,
      },
    ]);
    setIndexValue(previousIndex => previousIndex +1);
    setInputVaule("");
  }

  return (
    <div className="mt-32 flex place-content-center">
      <div className="w-full max-w-md bg-teal-300 px-8 pt-6 pb-8 mb-4">
        <form
          action="#"
          onSubmit={handleAdd}
        >
          <h1 className="text-3xl font-bold">Todo Application</h1>
          <div className="mb-4">
            <label className="block text-700 font-bold m-2" for="newItem">
              Add new Item
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="newItem"
              type="text"
              placeholder="Add new todo Item"
              onChange={pickValue}
              value={inputVaule}
            />        
          </div>
        </form>
        <ul className="mt-8">
              {todos.map((todo) => (
                <li className="block text-100 text-2xl font mb-10 flex" key={todo.id}>
                  <div className="">
                  <input className="mr-3" type="checkbox"/>
                  <span>{todo.title}</span>
                  </div>
                  <button className=" text-white flex ml-auto">x</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center m-16">
            <button
              className="font-bold py-2 px-4 border border-black rounded"
              type="button"
            >
              Clear
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
