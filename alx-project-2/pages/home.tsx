// basic function
import React from 'react';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Next.js Project!</h1>
        <p>Get started by exploring the basics of Next.js.</p>
      </main>
    </div>
  );
};

export default Home;
