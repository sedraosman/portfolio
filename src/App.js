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
        <h3>Computer Engineer | Web Developer | Passionate about AI and Software Development</h3>
        <p style={{paddingTop:"20px"}}>
        Computer Engineering graduate with an interest in web development, software projects, and learning more about AI technologies.
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
              I am a Computer Engineering graduate with a general interest in web development and software engineering.
              I enjoy learning through small projects, improving my technical skills, and exploring different areas such as AI and application development.
              <br/>
              • Computer Engineering graduate  <br/>
              • Basic experience in web development and software projects <br/> 
              • Familiar with React, Laravel, Python, and databases  <br/>
              • Interested in learning more about AI and modern software technologies <br/> 
              • Motivated to grow and improve through hands-on practice
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
          Selected Projects:
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
      img={process.env.PUBLIC_URL +"/img/pray.png"} 
          title="Prayer Times" 
          github="https://github.com/sedraosman/prayer-times"
          description={"A React web application that retrieves daily prayer times from an external API, displays them clearly, and calculates the real-time countdown to the next upcoming prayer."}/>
        

     
      <Project 
      img={process.env.PUBLIC_URL +"/img/smartDay.png"}
          title="Smart Daily Assistant" 
          github="https://github.com/sedraosman/Smart-Daily-Assistant"
          description={"A mobile AI daily assistant app built with React Native that lets users write daily notes, analyze emotions with AI, and track mood changes over time."}/>

      <Project 
      img={process.env.PUBLIC_URL +"/img/Budget.png"}
          title="Smart Budget" 
          github="https://github.com/sedraosman/SmartBudget"
          description={"A React personal finance app that tracks income and expenses with filtering and balance overview."}/>
      
      
      <Project 
      img={process.env.PUBLIC_URL +"/img/products.png"}
          title="Gold Shop" 
          github="https://github.com/sedraosman/goldShop"
          description={"A React web application that displays products from JSON data and dynamically calculates and shows gold prices fetched from the web."}/>


      
      <Project 
      img={process.env.PUBLIC_URL +"/img/basket.png"} 
          title="Basketball Shot Detector" 
          github="https://github.com/sedraosman/Basketball-Shot-Detector"
          description={"A Python computer vision project that analyzes basketball videos to detect shots using color tracking and trajectory modeling with a simple GUI."}/>

      <Project 
      img={process.env.PUBLIC_URL +"/img/e-commerce.png"} 
          title="e-commerce" 
          github="https://github.com/sedraosman/e-commerce2"
          description={"A web application developed with Laravel featuring product display, shopping cart, checkout, and a basic admin dashboard."}/>
 

      
      
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
