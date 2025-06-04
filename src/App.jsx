import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Router1 from './component/Router1';
import { MyProvider } from './context';



//בשם ה' נעשה ונצליח!!!!!!!!!!!!!!!!!!!!!!!
function App() {
const [items, setitems] = useState([
  {
    name: "Avocado-maki",
    id: 1,
    price: 22,
    amount: 8,
    pic: "Avocado.jpg"
  },
  {
    name: "Crumbed-maki",
    id: 2,
    price: 34,
    amount: 8,
    pic: "Crumbed.jpg"
  },
  {
    name: "Salmon cucumber-maki and Nigiri",
    id: 3,
    price: 22,
    amount: 8,
    pic: "NiguirSalmonCucumber.jpg"
  },
  {
    name: "Salmon cucumber-maki",
    id: 4,
    price: 22,
    amount: 12,
    pic: "SalmonCucumber.jpg"
  },
  {
    name: "Salmon teriaki-maki",
    id: 5,
    price: 22,
    amount: 8,
    pic: "Teriaki.jpg"
  },
  {
    name: "Tuna-maki",
    id: 6,
    price: 22,
    amount: 8,
    pic: "Tuna.jpg"
  }
]);
  const [cartitems, setcartitems] = useState([])
  const [sum, setsum] = useState(0)
  const [CurrentUser, setCurrentUser] = useState(null)
  const [manager,setmanager]=useState(false)
  const [users, setUsers] = useState([
    { id: 1, userName: "Sara", password: "1234aA!" },
    { id: 2, userName: "Dani", password: "1234bB!" },
    { id: 3, userName: "Yudit", password: "1818!" },
    { id: 4, userName: "manager", password: "1" },
  ])
  const store = {
    setUser: setUsers,
    users,

    addUser: (newUser) => {
      setUsers([...users, newUser]);
    },
    userLoggedIn: (user) => {
      setCurrentUser(user)
    },
    CurrentUser,
    setCurrentUser,
    manager,setmanager,
    logout: () => {
  setCurrentUser(null);
}

  }
  return (
    <div>

 <MyProvider value={store}>
      <Router1
        cartitems={cartitems}
        setcartitems={setcartitems}
        sum={sum}
        setsum={setsum}
        items={items}
        setitems={setitems}
        store={store}
      />
</MyProvider>
    </div>
  );
}

export default App;