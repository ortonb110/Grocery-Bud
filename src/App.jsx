import { useState } from "react";
import List from "./Components/List";
import Alert from "./Components/Alert";

function App() {
  const [editing, setEditing] = useState(false);
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const [name, setName] = useState();
  const [editID, setEditID] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && editing) {
      //display alert and deal with edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('')
    }
  };

  return (
    <main className="bg-white py-[2rem] px-[1.5rem] rounded-md shadow-lg">
      <section className="px-[2rem]">
        <h1 className="capitalize font-bold text-[2rem] text-center mb-[2rem]">
          grocery bud
        </h1>
        <form className="mb-[2rem]" onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="e.g. eggs"
            className="w-[35rem] border-[1px] border-blue-400 outline-none px-[1rem] py-[0.2rem] rounded-l-md bg-gray-200 text-gray-600"
          />
          <button
            type="submit"
            
            className="uppercase bg-blue-400 text-white px-[1rem] py-[0.3rem] rounded-r-md hover:bg-blue-500 transition-all ease-in-out duration-200"
          >
            {editing ? "editing" : "submit"}
          </button>
        </form>

        {list.length > 0 && (
          <div className="flex flex-col">
            <List items={list} />
            <button className="capitalize text-[1.4rem] text-red-500 mt-[1rem]">
              clear all
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
