// src/pages/edit/[id].js
import React from 'react';
import { useRouter } from 'next/router';
// import Header from '../../components/Header';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
// import Footer from '../../components/Footer';
// import LandingPageEditor from '../../features/landingPages/LandingPageEditor';
import LandingPageEditor from '@/features/landingPages/landingPageEditor';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <LandingPageEditor id={id} />
      <Footer />
    </div>
  );
};

export default Edit;