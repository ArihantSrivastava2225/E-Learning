import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import './script.js';

function App() {
  useEffect(() => {
    // createCard(1, "Programming Fundamentals", "15/18", 80, "7/8", 87.5, 472-0.8*472, 1);
    // createCard(2, "Mathematics", "18/19", 94, "4/5", 94.73, 472-0.9*472, 2);
}, []);

  return (
    <div className="App">
      <img src="https://img.freepik.com/premium-photo/office-desktop-with-items-te-wooden-table_218381-16216.jpg?ga=GA1.1.296799929.1720875365&semt=ais_hybrid" alt="" />
      <div className="navbar">
        <div className="logo">⚡</div>
        <div className="items">
          <div className="item1 item"><a href="#">Home</a></div>
          <div className="item2 item"><a href="#">Class Group</a></div>
          <div className="item3 item"><a href="#">Assignments</a></div>
          <div className="item4 item"><a href="#">Logout</a></div>
        </div>
      </div>
      <div className="bigcont">
        <div className="container1">
          <div className="item item1">Course Name :<br/> B.Tech. Computer Science and Engineering</div>
          <div className="item item2">Name :<br/>XYZ</div>
          <div className="item item3">E-mail address :<br/> xyzabc@gmail.com</div>
          <div className="item item4">Phone Number :<br/>9729322837</div>
          <div className="item item5">Roll Number :<br/>24/B04/078</div>
        </div>
        <div className="container2">
          {/* <button></button> */}
        </div>
        <div className="container3">
          <div className="item1 item">
            <p>Announcements</p>
            <div className="box">
              1. Deadline of ece assignment is 18/10/24
              2. tomorrow is holiday due to teacher's research program.
            </div>
          </div>
          <div className="item2 item">
            <p>Your Teachers</p>
            <div className="box">
              CO - Mr. Rohit
              MA - Mr. Rohan
              ECE - Mr. Sumit 
              WEB - Mrs. Kanikka 
              ED - Mrs. Aishwarya
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
