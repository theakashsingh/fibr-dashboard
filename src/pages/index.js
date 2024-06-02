// src/pages/index.js
import React from 'react';
import { useSelector } from 'react-redux';
// import Header from '../components/Header';
import Header from '@/component/Header';
// import Footer from '../components/Footer';
import Footer from '@/component/Footer';
// import LandingPageList from '../components/LandingPageList';
import LandingPageList from '@/component/LandingPageList';

const Home = () => {
  const landingPages = useSelector((state) => state.landingPages.landingPages);

  return (
    <div>
      <Header />
      {/* Render the LandingPageList component only on the client-side */}
      {typeof window !== 'undefined' && <LandingPageList />}
      {/* Render a placeholder or alternative content on the server-side */}
      {typeof window === 'undefined' && <div>Loading...</div>}
      <Footer />
    </div>
  );
};

export default Home;

