import { useState, useEffect } from "react";
import List from "./Components/List";
import Alert from "./Components/Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return []
  }
}

function App() {
  const [editing, setEditing] = useState(false);
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const [name, setName] = useState('');
  const [editID, setEditID] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, 'red', 'please enter value')
    } else if (name && editing) {
        setList(list.map((item)=> {
          if(item.id === editID) {
            return {...item, title: name}
          }

          return item
        }))
        showAlert(true, 'green', 'Item edited')
        setName('')
        setEditing(false)
        setEditID(null);

    } else {
      // show alert
      showAlert(true, 'green', 'item added')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({
      show,
      type,
      msg,
    });
  };

  const clearAllHandler = () => {
    setList([]);
    showAlert(true, 'red', 'all cleared')
  }

  const deleteHandler = (id) => {
    const newList = list.filter(item=> item.id !== id);
    setList(newList);
    showAlert(true, 'red', 'item deleted')
  }

  const editItem = (id) => {
    setEditID(id);
    setEditing(true);
    const specificTitle = list.find((item) => 
      item.id === id
    );
    setName(specificTitle.title);
  }

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <main className="bg-white py-[2rem] px-[1.5rem] rounded-md shadow-lg">
      <section className="px-[2rem]">
        <h1 className="capitalize font-bold text-[2rem] text-center mb-[2rem]">
          grocery bud
        </h1>
        <form className="mb-[2rem]" onSubmit={submitHandler}>
          {alert.show && <Alert alert={alert} removeAlert={showAlert} list={list}/>}
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
            <List items={list} deleteHandler={deleteHandler} editItem={editItem} editing={editing}/>
            <button className="capitalize text-[1.4rem] text-red-500 mt-[1rem]" onClick={clearAllHandler}>
              clear all
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
