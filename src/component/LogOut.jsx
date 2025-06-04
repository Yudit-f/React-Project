import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';

const LogOut = ( {setsum,setcartitems}) => {
  const { logout } = useContext(MyContext);
  const { setCurrentUser } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // מאפס את המשתמש
      setCurrentUser(null);
      setcartitems([]);     // ניקוי עגלת קניות
      setsum(0);  
    navigate('/'); 
  }, [navigate]);
};

export default LogOut;