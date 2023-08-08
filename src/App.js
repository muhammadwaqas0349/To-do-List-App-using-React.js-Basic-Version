import './App.css';
import {useState} from "react";
import List from './List.js';

function App() {
  const [currentItem, setCurrentItem] = useState(""); 
  const [itemList, setItemList] = useState([]);



  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value); 
  }
  const addItemToList = () => {
    setItemList([...itemList, {item: currentItem, key: Date.now()}]);
    setCurrentItem("");

  }


  return (
    <div className="App">
      <header className="App-header"><h1>To-Do List App</h1>
        <div className="wrapper">
        <div className="input-wrapper">
                        <input placeholder='Add Item' value={currentItem} onChange={onChangeHandler}/>
                        <button onClick={addItemToList} value={itemList}>+</button>
      
        </div>
        <List itemList={itemList} setItemList={setItemList} />
        </div>
      </header>
      
    </div>
  );
}

export default App;
