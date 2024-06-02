// src/pages/create.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addLandingPage } from '../features/landingPages/landingPagesSlice';
// import Header from '../components/Header';
import Header from '@/component/Header';
// import Footer from '../components/Footer';
import Footer from '@/component/Footer';
const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLandingPage = { title, description, components: [] };
    dispatch(addLandingPage(newLandingPage));
    setTitle('');
    setDescription('');
    router.push('/');
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Create Landing Page</button>
      </form>
      <Footer />
    </div>
  );
};

export default Create;

