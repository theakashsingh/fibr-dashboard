// src/pages/dashboard.js
import React from 'react';
// import PrivateRoute from '../components/PrivateRoute';
import PrivateRoute from '@/component/PrivateRoute';
// import Header from '../components/Header';
import Header from '@/component/Header';
// import LandingPageList from '../components/LandingPageList';
import LandingPageList from '@/component/LandingPageList';
// import Footer from '../components/Footer';
import Footer from "@/component/Footer"

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