import { useState, useEffect} from 'react'
import axios from 'axios';
import './App.css'

function App() {
const [UserList, setUserList] = useState([]);
const [name, setName] = useState("")
const [age, setAge] = useState(0)
const [username, setUsername] = useState("")

useEffect(() => {
  axios.get("http://localhost:3001/getUsers")
    .then((response) => {
      setUserList(response.data);
    });
},[]);

const createUser = () => {
  axios.post("http://localhost:3001/createUser", {
    name: name,
    age: age,
    username: username,
  })
    .then((response) => {
      alert("User Created!")
      setUserList([...UserList, {name, age, username}])
    });
};

  return (
    <>
      <div className='App'>
        <div className='users-display'>
          {UserList.map((user) => {
            return(
              <>
              <div>
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Username: {user.username}</h1>
              </div>
              </>
            )
          })}
        </div>
        <div>
          <input 
            type='text' 
            placeholder='Name...'
            onChange={(e) => {
              setName(e.target.value);
            }}
            />
          <input 
            type='text' 
            placeholder='Age...'
            onChange={(e) => {
              setAge(e.target.value);
            }}
            />
          <input 
            type='text' 
            placeholder='Username...'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            />
          <button onClick={createUser}>Create User</button>
        </div>
      </div>
    </>
    
  )
}

export default App
