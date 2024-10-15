import React, { useState, useEffect, useRef } from 'react';
import './CourseCard.css';
const CourseCard = ({ courseName, attendance, courseComp, assignStatus, assignComp , classNo}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < courseComp) {
        setCounter(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [counter, courseComp]);

  const dashOffset = 472 - (courseComp / 100) * 472;
  useEffect(() => {
    // Create a style tag
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes anim${classNo} {
      100% {
          stroke-dashoffset: ${dashOffset};
      }
  }
    `;  
    // here we needed to create different animation functions , because we only define onemptied, then last time function called will have a dashOffset value which will overwrite the previous onsecuritypolicyviolation, hence all subjects having same output 
    // Append the style tag to the head of the document
    document.head.appendChild(styleSheet);

    return () => {
      // Cleanup: Remove the style element when component unmounts
      document.head.removeChild(styleSheet);
    };
  }, []);
  return (
    <div className="container scale">
      {/* <div className="box box1"></div> */}
      <div className="box box2">{courseName}</div>
      <div className="box box3">
        Attendance: {attendance} <br />
        <p style={{ fontSize: '20px', marginTop: '5px' }}>Course Status:</p>
      </div>
      <div className="box box4">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id={`number`}>
                {counter}%
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle 
              className={`circle${classNo}`} 
              cx="80" 
              cy="80" 
              r="70" 
              strokeLinecap="round" 
              style={{
                fill: 'none',
                stroke: 'url(#GradientColor)',
                strokeWidth: '20px',
                strokeDasharray: '472',
                strokeDashoffset: '472',
                animation: `anim${classNo} 2s linear forwards`
              }}
            />
          </svg>
        </div>
      </div>
      <div className="box box5">
        <p>Assignment Status:</p>
        <div className="assign">
          <div 
            className={`small-box`}
            style={{ width: `${assignComp}%` }}
          >
            {assignStatus}
          </div>
        </div>
      </div>
      <div className="box box6">Last 24 hours</div>
    </div>
  );
};

const CourseCardContainer = () => {
  const courses = [
    { courseName: "Programming Fundamentals", attendance: "15/18", courseComp: 80, assignStatus: "7/8", assignComp: 87.5,classNo: 1},
    { courseName: "Mathematics", attendance: "18/19", courseComp: 94, assignStatus: "4/5", assignComp: 94.73,classNo: 2},
    { courseName: "Engineering Drawing", attendance: "10/18", courseComp: 55.55, assignStatus: "4/8", assignComp: 50,classNo: 3},
    { courseName: "Electronics", attendance: "12/18", courseComp: 66.66, assignStatus: "6/7", assignComp: 85.71,classNo: 4},
    { courseName: "WebDev", attendance: "15/18", courseComp: 83.33, assignStatus: "6/6", assignComp: 100,classNo: 5}
  ];

  return (
    <div className="container2">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseCardContainer;