import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0d0d0d',
      color: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
        flex: 1,
        padding: '80px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0d0d0d'
      }}>
        <h1 style={{ fontSize: '3.5em', marginBottom: '10px' }}>Jae</h1>
        <p style={{ fontSize: '1.2em', color: '#a9a9a9', marginBottom: '40px' }}>Senior Mechatronics and Robotics Technician</p>
        <button style={{
          backgroundColor: '#00f5ff',
          border: 'none',
          padding: '12px 30px',
          borderRadius: '8px',
          color: '#0d0d0d',
          fontSize: '1em',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#00c2ff'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#00f5ff'}>
          View My Work
        </button>
      </section>

      {/* About Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '30px' }}>About Me</h2>
        <p style={{ fontSize: '1.1em', maxWidth: '800px', margin: 'auto', lineHeight: 1.6 }}>
          With over a decade of experience in mechatronics and robotics, I specialize in automation, controls systems, and industrial maintenance. 
          My expertise spans from designing robotic solutions to managing complex SAP EAM systems for large-scale manufacturing operations.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '40px' }}>Skills</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {['Robotics', 'Automation Systems', 'PLC Programming', 'SAP EAM', 'Industrial Controls', 'Conveyor Systems', 'Troubleshooting', 'Maintenance'].map((skill, index) => (
            <div key={index} style={{
              backgroundColor: '#2a2a2a',
              padding: '15px 20px',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1em',
              border: '1px solid #00f5ff',
              flex: '1 1 200px'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '40px' }}>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              title: "Automated Conveyor System",
              description: "Designed and implemented a fully automated conveyor system with PLC controls for a manufacturing plant."
            },
            {
              title: "Robotics Integration",
              description: "Integrated collaborative robots (cobots) into assembly lines, improving production efficiency by 30%."
            },
            {
              title: "SAP EAM Implementation",
              description: "Led the implementation of SAP EAM for asset management in a large industrial facility."
            }
          ].map((project, index) => (
            <div key={index} style={{
              backgroundColor: '#2a2a2a',
              padding: '20px',
              borderRadius: '10px',
              color: '#ffffff',
              border: '1px solid #3a3a3a'
            }}>
              <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '40px' }}>Experience</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              company: "Tech Industries Inc.",
              title: "Senior Mechatronics Technician",
              duration: "2018 - Present",
              description: [
                "Maintained and optimized robotic systems across multiple production lines.",
                "Implemented SAP EAM for comprehensive asset management."
              ]
            },
            {
              company: "Automation Solutions Ltd.",
              title: "Robotics Systems Engineer",
              duration: "2014 - 2018",
              description: [
                "Designed and deployed automation systems for automotive manufacturing.",
                "Led teams in troubleshooting complex control systems."
              ]
            }
          ].map((exp, index) => (
            <div key={index} style={{
              backgroundColor: '#2a2a2a',
              padding: '20px',
              borderRadius: '10px',
              color: '#ffffff',
              border: '1px solid #3a3a3a'
            }}>
              <h3>{exp.company}</h3>
              <p style={{ fontWeight: 'bold', marginTop: '5px' }}>{exp.title}</p>
              <p style={{ color: '#a9a9a9', marginTop: '5px' }}>{exp.duration}</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '15px' }}>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '40px' }}>Contact Me</h2>
        <form style={{
          maxWidth: '600px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <input type="text" placeholder="Your Name" required style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #3a3a3a'
          }} />
          <input type="email" placeholder="Your Email" required style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #3a3a3a'
          }} />
          <textarea rows="5" placeholder="Your Message" required style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #3a3a3a'
          }}></textarea>
          <button type="submit" style={{
            backgroundColor: '#00f5ff',
            border: 'none',
            color: '#0d0d0d',
            padding: '12px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = '#00c2ff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#00f5ff'}>
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '30px 20px',
        textAlign: 'center',
        backgroundColor: '#111111',
        borderTop: '1px solid #333'
      }}>
        <p style={{ fontSize: '0.9em', color: '#666' }}>© {new Date().getFullYear()} Jae's Portfolio | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;