// src/components/Image.js
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image = ({ src, alt, onSrcChange, onAltChange }) => {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} />
      <div>
        <label>
          Source:
          <input type="text" value={src} onChange={onSrcChange} />
        </label>
        <label>
          Alt:
          <input type="text" value={alt} onChange={onAltChange} />
        </label>
      </div>
    </ImageContainer>
  );
};

export default Image;

