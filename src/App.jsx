import React from 'react';
import './App.css';
// import NavigationBar from './components/NavigationBar/NavigationBar';
// import Home from './components/Home/Home';
// import TemporaryHome from './components/TemporaryHome/TemporaryHome'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProfileCard from './components/Profile/ProfileCard';
// import profilePic from './assets/profile.jpg'; 
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';

function App() {
     const profileImageUrl = '/assets/profileImage/profile1.png'
  return (
    <>
      <Header />
      <main className="hero-section">
        <Hero />
        <ProfileCard imageUrl={profileImageUrl} />
      </main>
      <About />
      <Projects />
      <Contact />

    </>
  );
}

export default App;
