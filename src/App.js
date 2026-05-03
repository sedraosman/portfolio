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
        <h3>Computer Engineer | Web Developer | Interested in AI and Software Development</h3>
        <p style={{paddingTop:"20px"}}>
        Computer Engineering graduate interested in web and software development. I enjoy building small projects and improving my skills, and I am currently learning Flutter to expand into mobile development.</p>
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
        <h2 style={{ marginTop: "100px", color: "#778873" }}>About Me:</h2>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={6}
            sx={{
              maxWidth: 700,
              margin:"20px",
              padding: "30px",
              backgroundColor: "#A1BC98",
              color: "#3A3A3A",
            }}
          >
            <Typography>
          I am a Computer Engineering graduate with a strong interest in web and software development.
          I have experience building projects using React, Laravel, Python, and databases.
          I enjoy learning through hands-on projects and exploring different areas such as mobile development and AI.
          I am currently expanding my skills in Flutter and building mobile applications.
            </Typography>
          </Paper>
        </Box>  
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills">
        <Container>
          <h2 style={{ marginTop: "100px", color: "#778873", textAlign: "center" }}>
            Technical Skills:
          </h2>

          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap",margin:"20px" }}>
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
           Projects:
        </h2>

        <div
          style={{
            margin:"20px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            
          }}
        >
          {/* AI & MAIN PROJECTS */}
      <Project 
      img={process.env.PUBLIC_URL +"/img/e-commerce.png"} 
          title="E-commerce" 
          github="https://github.com/sedraosman/e-commerce2"
          description={"A full-stack e-commerce web application built with Laravel and MySQL.It allows users to browse products, manage a shopping cart, and complete checkout."}/>
 
        <Project 
      img={process.env.PUBLIC_URL +"/img/chatme.png"}
          title="Chat Me" 
          github="https://github.com/sedraosman/ChatMe"
          description={"A real-time chat application built with Flutter and Firebase.It allows users to sign in and send messages instantly using Firestore"}/>
      
         <Project 
      img={process.env.PUBLIC_URL +"/img/basket.png"} 
          title="Basketball Shot Detector" 
          github="https://github.com/sedraosman/Basketball-Shot-Detector"
          description={"A computer vision project built with Python and OpenCV to detect basketball shots from videos.It uses trajectory analysis to identify shot movements."}/>

           <Project 
      img={process.env.PUBLIC_URL +"/img/smartDay.png"}
          title="Smart Daily Assistant" 
          github="https://github.com/sedraosman/Smart-Daily-Assistant"
          description={"A mobile application built with React Native for daily mood tracking and emotion analysis.It helps users log moods and track emotional patterns over time."}/>

    
      <Project 
      img={process.env.PUBLIC_URL +"/img/pray.png"} 
          title="Prayer Times" 
          github="https://github.com/sedraosman/prayer-times"
          description={"A React web application that fetches daily prayer times from an external API.It displays real-time countdown to the next prayer."}/>
        

    
      <Project 
      img={process.env.PUBLIC_URL +"/img/products.png"}
          title="Gold Shop" 
          github="https://github.com/sedraosman/goldShop"
          description={"A React web application that displays products and dynamically calculates gold prices.It updates pricing based on external data sources"}/>


      
     
      
      
      
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
