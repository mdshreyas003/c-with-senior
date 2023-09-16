import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import * as XLSX from 'xlsx';
import Home from './components/Home';
import Features from './components/Features';
import Founders from './components/Founders';
import Footer from './components/Footer';
import './App.css'
import down from './images/down.svg'
import Form from './components/Form';
const App = () => {
  const [users, setUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);

  const [seats, setSeats] = useState(0);
  useEffect(() => {
    const fetchData = async()=>{
    const url = 'https://docs.google.com/spreadsheets/d/1XRixNZS6u60jWoZG9rZz88HCIm8G6kIY2AqQtbHO2OE/edit?usp=sharing';
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: 'array' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        const headers = data[1];
        var usersData = data.slice(2).map((row) => {
          const user = {};
          if(row.length >1){
            setSeats(seats+1)
          headers.forEach((header, index) => {
            
              user[header] = row[index];

            });}
            return user;
        });
        setUsers(usersData);
      });
    }
    fetchData()
    const interval = setInterval(fetchData, 6000);
    return () => clearInterval(interval);
    
  }, []);
  const [showForm, setShowForm] = useState(false);

  
  
  return (
    <div className="App">
      <Home showForm={showForm} setShowForm={setShowForm} />
      <Form setShowForm={setShowForm} showForm={showForm}/>
      <div className="dropdown" onClick={() => setShowUserList(!showUserList)}>
      <span className='enrolled '> Successfully Enrolled Students✅</span>
        <img className='down bounce-top' src={down}/>
      </div>
      {showUserList && <UserList users={users} />}
      <Features/>
      <Founders/>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
