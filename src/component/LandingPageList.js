// src/components/LandingPageList.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLandingPage } from '../features/landingPages/landingPagesSlice';

const LandingPageListContainer = styled.div`
  margin: 2rem 0;
`;

const LandingPageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const LandingPageTitle = styled.h3`
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const LandingPageList = () => {
  const dispatch = useDispatch();
  const landingPages = useSelector((state) => state.landingPages.landingPages);

  const handleDeleteLandingPage = (id) => {
    dispatch(deleteLandingPage(id));
  };

  return (
    <div>
      <h2>Landing Pages</h2>
      <ul>
        {landingPages.map((page) => (
          <LandingPageItem key={page.id}>
            <LandingPageTitle>{page.title}</LandingPageTitle>
            <ButtonGroup>
              <Link href={`/edit/${page.id}`} passHref>
                <Button>Edit</Button>
              </Link>
              <Link href={`/preview/${page.id}`} passHref>
                <Button>Preview</Button>
              </Link>
              <Button onClick={() => handleDeleteLandingPage(page.id)}>Delete</Button>
            </ButtonGroup>
          </LandingPageItem>
        ))}
      </ul>
      <Link href="/create" passHref>
        <Button>Create New Landing Page</Button>
      </Link>
    </div>
  );
};

export default LandingPageList;