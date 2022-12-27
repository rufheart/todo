import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [text, setText] = useState()
  let [list, setList] = useState([]);
  let [show, setShow] = useState(false)
  let [secondinpt, setSecondinpt] = useState()

  function seter(e){
    setText(e.target.value)
  }

  let addTodo = (todo) => {
    let newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setText("");
  };

  let deleteTodo =(id) =>{
    let newList = list.filter((todo) => todo.id !== id) 

    setList(newList);
    // console.log(newList)
  }

  function addto(){
    if(text!=""){
      addTodo(text)
      // console.log(text.length)
    }
  }

  function modifyTodo(todo){
    for(let i of list){
        if(i.id==todo){
          console.log(i.id)
        }
    }
  }
  return (
    <div className='main'>
        <div>
          <div>
            <h1>My Task list</h1>
          </div>
          <div>
            <input type="text" name="" id="" value={text} onChange={seter}/>
            <button onClick={addto}>Create</button>
          </div>
          <div>
              <ul>
                {list.map((todo) =>(
                  <li key={todo.id}>
                    <ul>
                      <li>{todo.todo}</li>
                      {show==false?null:<li></li>}
                    </ul> 
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    <button onClick={() => modifyTodo(todo.id)}>modify</button>
                  
                  </li>
                ))}
              </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
