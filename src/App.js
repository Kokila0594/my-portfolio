import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Kokila P</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">  

        <div className="hero-content">

          <p className="intro">Hello, I'm</p>

          <h1>Kokila P</h1>

          <h2>Full Stack Developer | Java • Spring Boot • React</h2>

          <p className="hero-text">
            B.Tech ECE graduate passionate about building scalable and
            user-friendly web applications. I work with Java, Spring Boot,
            React, and PostgreSQL to turn ideas into practical solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a
              href="https://github.com/Kokila0594"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kokila-prabakaran/"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>

            <a
              href="/Kokila_P_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              Resume
            </a>

          </div>

        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img src="/profile.jpg" alt="Kokila P" />
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech Electronics and Communication Engineering graduate
          with a strong interest in software and full stack development.
          I have hands-on experience building applications using Java,
          Spring Boot, React, and PostgreSQL.
        </p>

        <p>
          Through academic projects, internships, and hands-on learning,
          I have developed experience in REST APIs, database integration,
          responsive web development, and IoT-based systems.
        </p>

        <p>
          I am currently looking for an opportunity where I can apply my
          technical skills, continue learning, and contribute to real-world
          software projects.
        </p>
      </section>


    {/* Education Section */}
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>B.Tech – Electronics and Communication Engineering</h3>
          <h4>Manakula Vinayagar Institute of Technology</h4>
          <h5>Puducherry, India</h5>
          <p>CGPA: 8.74</p>
          <p>2022 – 2026</p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <h4>Achariya Siksha Mandir</h4>
          <h5>Puducherry, India</h5>
          <p>Percentage: 78.3%</p>
          <p>2021 – 2022</p>
        </div>

        <div className="education-card">
          <h3>Secondary School Leaving Certificate (SSLC)</h3>
          <h4>Achariya Sri Sampourna Vidyalayam</h4>
          <h5>Puducherry, India</h5>
          <p>Percentage: 98.8%</p>
          <p>2020 – 2021</p>
        </div>

      </div>
    </section>


      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Java</p>
            <p>JavaScript</p>
            <p>Python Basics</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React.js</p>
          </div>

          <div className="skill-card">
            <h3>Backend & Database</h3>
            <p>Spring Boot</p>
            <p>REST APIs</p>
            <p>Spring Data JPA</p>
            <p>PostgreSQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools & Other</h3>
            <p>Git & GitHub</p>
            <p>VS Code</p>
            <p>Eclipse</p>
            <p>IoT & Microcontrollers</p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Shopping Mall Customer Services</h3>

            <p>
              A full-stack customer management application that provides
              RESTful APIs for managing customer information and services.
              The project follows a layered backend architecture and
              includes a React-based frontend.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>PostgreSQL</span>
              <span>REST API</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Kokila0594/C2TC_Sprint1_Project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://github.com/Kokila0594/C2TC_Sprint2_Project"
                target="_blank"
                rel="noreferrer"
              >
                Frontend
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Health Monitor</h3>

            <p>
              An IoT-based heart monitoring system designed to capture
              heart-related data during speech activity using sensors
              and a microcontroller, with real-time data transmission
              and web integration.
            </p>

            <div className="project-tech">
              <span>IoT</span>
              <span>Microcontroller</span>
              <span>Sensors</span>
              <span>Real-Time Monitoring</span>
              <span>Web Integration</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Kokila0594/Smart-Health-Monitor-for-Heart-Analysis-During-Speech-Activity"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Noise Detector using SD Card Module</h3>

            <p>
              A microcontroller-based noise monitoring system that detects
              surrounding sound levels and stores the collected data using
              an SD card module for real-time monitoring and data logging.
            </p>

            <div className="project-tech">
              <span>Microcontroller</span>
              <span>Microphone Sensor</span>
              <span>SD Card</span>
              <span>Data Logging</span>
              <span>Embedded System</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Kokila0594"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>



      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="experience-container">

          <div className="experience-card">
            <h3>Web Development Internship</h3>
            <h4>TechnoHacks EduTech</h4>
            <p>08/04/2024 – 07/05/2024</p>
          </div>

          <div className="experience-card">
            <h3>Python Programming Internship</h3>
            <h4>CodSoft</h4>
            <p>20/06/2024 – 20/07/2024</p>
          </div>

          <div className="experience-card">
            <h3>Implant Training on Television Broadcasting</h3>
            <h4>Doordarshan Kendra, Puducherry</h4>
            <p>24/06/2024 – 28/06/2024</p>
          </div>

        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="section">
        <h2>Certifications</h2>

        <div className="certifications-container">

          <div className="certification-card">
            <h3>Full Stack Development MasterClass</h3>
            <h4>NoviTech R&D Private Limited</h4>
            <p>30 Days MasterClass in Full Stack Development</p>

            <a
              href="https://www.linkedin.com/posts/kokila-prabakaran_fullstackdevelopment-webdevelopment-softwaredevelopment-activity-7490701829958172672-A7xT"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
             View Certificate
            </a>
          </div>

          <div className="certification-card">
            <h3>Full Stack Java Training</h3>
            <h4>TNSIF & Capgemini</h4>
            <p>Campus To Corporate Careers Training Program</p>

            <a
              href="https://www.linkedin.com/posts/kokila-prabakaran_c2tc-csrinitiative-fullstackjava-activity-7431341270662332416-4GlT"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>

          <div className="certification-card">
            <h3>Python Programming Internship</h3>
            <h4>CodSoft</h4>
            <p>4 Weeks Virtual Internship Program</p>

            <a
              href="https://www.linkedin.com/posts/kokila-prabakaran_certificate-activity-7222292371701428225-CgrO"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>

          <div className="certification-card">
            <h3>Implant Training on Television Broadcasting</h3>
            <h4>Doordarshan Kendra, Puducherry</h4>
            <p>Industrial training in Television Broadcasting</p>

            <a
              href="https://www.linkedin.com/posts/kokila-prabakaran_implanttraining-doordarshanpondicherry-activity-7217187890965991426-vDxw"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>

          <div className="certification-card">
            <h3>Web Development Internship</h3>
            <h4>TechnoHacks EduTech</h4>
            <p>One-month internship in Web Development</p>

            <a
              href="https://www.linkedin.com/posts/kokila-prabakaran_webdevelopment-internship-technohacks-activity-7194340121591046145-cCuk"
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>
          I'm currently looking for opportunities where I can apply my
          skills, continue learning, and contribute to real-world
          software projects.
        </p>

        <div className="contact-links">

          <a
            href="mailto:kokila090904@gmail.com"
            className="contact-btn"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/kokila-prabakaran/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Kokila0594"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kokila P. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;