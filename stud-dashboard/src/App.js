import React from 'react';
import './App.css';
import CourseCardContainer from './CourseCardContainer';

function App() {
  return (
    <div className="App">
      <img src="https://img.freepik.com/premium-photo/office-desktop-with-items-te-wooden-table_218381-16216.jpg?ga=GA1.1.296799929.1720875365&semt=ais" alt="" />
      <div className="navbar">
        <div className="sitename">
          <img src="https://www.vhv.rs/dpng/d/556-5561873_elearning-e-learning-logo-png-transparent-png.png" alt=""/>
        </div>
        <div className="items">
          <div className="item1 item"><a href="#">Home</a></div>
          <div className="item2 item"><a href="#">Class Group</a></div>
          <div className="item3 item"><a href="#">Assignments</a></div>
          <div className="item4 item"><a href="#">Logout</a></div>
        </div>
      </div>
      <div className="bigcont">
        <div className="container1">
          <div className="item item0">
            <div className="logo"><p>⚡</p></div>
            <div>Hey XYZ</div>
          </div>
          <div className="item item1">Course Name :<br/> B.Tech. Computer Science and Engineering</div>
          <div className="item item2">Name :<br/>XYZ</div>
          <div className="item item3">E-mail address :<br/> xyzabc@gmail.com</div>
          <div className="item item4">Phone Number :<br/>9729322837</div>
          <div className="item item5">Roll Number :<br/>24/B04/078</div>
        </div>
        <CourseCardContainer />
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
              CO - Mr. Rohit <br />
              MA - Mr. Rohan<br />
              ECE - Mr. Sumit <br />
              WEB - Mrs. Kanikka <br />
              ED - Mrs. Aishwarya<br />
            </div>
          </div>
        </div>
      </div>
      <div className="doubtbox">
        <input type="text" placeholder='Enter your doubts here'/>
        <select name="" id="">
          <option value="MA">Mr. Rohan</option>
          <option value="CO">Mr. Rohit</option>
          <option value="ECE">Mr. Sumit</option>
          <option value="WEB">Mrs. Kanikka</option>
          <option value="ED">Mrs. Aishwarya</option>
        </select>
        <button type='submit'>Post</button>
      </div>
    </div>
  );
}

export default App;