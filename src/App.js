import React from "react";
import "./App.css";

// MUI
import { Box, Container, Paper, Typography, Button } from "@mui/material";

// Component
import Project from "./Project";

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="section hero">
        <img src={process.env.PUBLIC_URL +"/img/sedra.png"} alt="profile" style={{ height: "380px" }} />
        <h1>Sedra Osman</h1>
        <h3>Computer Engineering Graduate</h3>
        <p>
          I build clean, functional web and mobile applications using modern
          technologies.
        </p>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#778873" }}
          href="#projects"
        >
          View My Projects
        </Button>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <h2 style={{ marginTop: "100px", color: "#778873" }}>About Me</h2>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={6}
            sx={{
              maxWidth: 700,
              padding: "30px",
              backgroundColor: "#A1BC98",
              color: "#3A3A3A",
            }}
          >
            <Typography>
              • Computer Engineering graduate <br />
              • Interested in Web & Mobile Application Development <br />
              • Experience with React, Laravel, Python, and databases <br />
              • Comfortable working with APIs and JSON data <br />
              • Passionate about clean, readable, and maintainable code
            </Typography>
          </Paper>
        </Box>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills">
        <Container>
          <h2 style={{ marginTop: "100px", color: "#778873", textAlign: "center" }}>
            Skills
          </h2>

          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              "HTML", "CSS", "JavaScript", "React",
              "PHP", "Laravel",
              "Python", "MySQL", "SQL", "C++","Java"
            ].map((skill) => (
              <Paper
                key={skill}
                elevation={6}
                sx={{
                  m: 1,
                  width: 140,
                  height: 45,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#A1BC98",
                }}
              >
                {skill}
              </Paper>
            ))}
          </Box>
        </Container>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <h2 style={{ marginTop: "180px", color: "#778873", textAlign: "center" }}>
          Projects
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* AI & MAIN PROJECTS */}
         <Project img={process.env.PUBLIC_URL +"/img/sky.png" }
          title="Atmos" 
          imghight="260"
          padding="0"
          paddingdis="110px"
           github="https://github.com/sedraosman/Atmos"
          description= "A weather web application developed with React, providing real-time weather information with bilingual support."/>

     <Project 
      img={process.env.PUBLIC_URL +"/img/products.png"}
          title="Gold Shop" 
          imghight="140"
          padding="75px"
          github="https://github.com/sedraosman/goldShop"
          description={"A React web application that displays products from JSON data and dynamically calculates and shows gold prices fetched from the web."}/>


      <Project 
      img={process.env.PUBLIC_URL +"/img/smartDay.png"}
          title="Smart Daily Assistant" 
          imghight="250px"
          padding="0"
          github="https://github.com/sedraosman/Smart-Daily-Assistant"
          description={"A mobile AI daily assistant app built with React Native that lets users write daily notes, analyze emotions with AI, and track mood changes over time."}/>

      <Project 
      img={process.env.PUBLIC_URL +"/img/basket.png"} 
          title="Basketball Shot Detector" 
          imghight="220px"
          padding="0"
          github="https://github.com/sedraosman/Basketball-Shot-Detector"
          description={"A Python computer vision project that analyzes basketball videos to detect shots using color tracking and trajectory modeling with a simple GUI."}/>

      <Project 
      img={process.env.PUBLIC_URL +"/img/e-commerce.png"} 
          title="e-commerce" 
          imghight="145px"
          padding="70px"
          paddingdis="150px"
          github="https://github.com/sedraosman/e-commerce2"
          description={"A web application developed with Laravel featuring product display, shopping cart, checkout, and a basic admin dashboard."}/>
 

       <Project 
      img={process.env.PUBLIC_URL +"/img/student.png"}
          title="Studend Meeting" 
          imghight="170px"
          padding="50px"
          github="https://github.com/sedraosman/studend-rendezvous"
          description={" A Java appointment booking system for students and professors, supporting selection of available time slots and management of meeting requests."}/>

      <Project 
      img={process.env.PUBLIC_URL +"/img/task.png"} 
          title="My Tasks" 
          imghight="200px"
          padding="20px"
          paddingdis="145px"
          github="https://github.com/sedraosman/My_Tasks"
          description={"A task management web application developed with React, allowing users to add, edit, and delete daily tasks."}/>

       <Project 
      img={process.env.PUBLIC_URL +"/img/pray.png"} 
          title="Prayer Times" 
          imghight="200px"
          padding="20px"
          paddingdis="145px"
          github="https://github.com/sedraosman/prayer-times"
          description={"A React web application that retrieves daily prayer times from an external API, displays them clearly, and calculates the real-time countdown to the next upcoming prayer."}/>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">
        <p>© 2025 Sedra Osman | Computer Engineer</p>
        <div className="footer-links">
          <a href="https://github.com/sedraosman">GitHub</a>
          <a href="https://www.linkedin.com/in/sedra-osman/">LinkedIn</a>
          <a href="mailto:sedraosman2001@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}

export default App;
