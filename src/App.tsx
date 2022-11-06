import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.list().then(setItems);
  }, []);


  const handleEliminar =(id)  => {
    const newArr = items.filter(item => item.id !== id) 
    console.log(newArr)
    setItems(newArr)
  }

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input autoFocus name="text" type="text" />
        <button>Add</button>
      </form>
      <ul>
        {items?.map((item) => (
          <li key={item.id} onClick={() => handleEliminar(item.id)}  className={item.completed ? styles.completed : ""}>
            {item.text} <button>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
