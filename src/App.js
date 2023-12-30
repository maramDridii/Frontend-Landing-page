import React from 'react';
import './App.css'; 
import logo from './logo.png';
import yourPicture from './your-picture.jpg';
import c1 from './course1.jpg'; 
import c2 from './course2.jpg'; 
import c3 from './course3.jpg'; 
import c4 from './course4.jpg'; 
import c5 from './course5.jpg'; 
import c6 from './course6.jpg'; 

function App() {
  const courses = [
    { image: c1, name: 'Spring Boot / Angular', price: '350 DT/ Month' },
    { image: c2, name: 'Node JS / React', price: '350 DT/ Month' },
    { image: c3, name: 'Flutter / Firebase', price: '350 DT/ Month' },
    { image: c4, name: 'Business Intelligence', price: '350 DT/ Month' },
    { image: c5, name: 'Artificial Intelligence', price: '350 DT/ Month' },
    { image: c6, name: 'Devops', price: '350 DT/ Month' }
   
  ];
  return (
    <div className="landing-page">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main>
        <div className="picture-section">
          <img src={yourPicture} alt="Your Picture" className="your-picture" />
          <div className="text-overlay">
            <h1>Improve your skills on your own To prepare for a better future</h1>
            <button className="register-button"><b>REGISTER NOW</b></button>
          </div>
        </div>
        
        <section className="courses-section">
        <h2>Discover our courses</h2>
        <div className="courses-container">
          {courses.map((course, index) => (
            <a href="#" className="course-link" key={index}>
              <div className="course">
                <img src={course.image} alt={course.name} />
                <div className="course-details">
                  <h3>{course.name}</h3>
                  <p><b>{course.price}</b></p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


        <section className="contact-section">
        <div className="contact-container">
          <h2><b>Contact Us</b></h2>
          <div className="input-container">
            <label htmlFor="name"><b>NAME</b></label>
            <input type="text" id="name" name="name" placeholder='Jiara Martins'/>
          </div>
          <div className="input-container">
            <label htmlFor="email"><b>EMAIL</b></label>
            <input type="email" id="email" name="email" placeholder='hello@reallygreatsite.com' />
          </div>
          <div className="input-container">
            <label htmlFor="message"><b>MESSAGE</b></label>
            <textarea id="message" name="message" rows="4" placeholder='Write your message here'></textarea>
          </div>
          <button className="send-button">Send the message</button>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;



