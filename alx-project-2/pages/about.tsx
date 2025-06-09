// basic function
import React from 'react';
import Header from '../components/layout/Header';
const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>About My Next.js Project</h1>
        <p>This project is a simple demonstration of Next.js features.</p>
      </main>
    </div>
  );
};

export default About;
