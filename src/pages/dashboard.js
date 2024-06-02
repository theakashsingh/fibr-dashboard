// src/pages/dashboard.js
import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import LandingPageList from '../components/LandingPageList';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div>
        <Header />
        <LandingPageList />
        <Footer />
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;