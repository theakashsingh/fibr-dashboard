// src/components/TextBlock.js
import React from 'react';
import styled from 'styled-components';

const TextBlockContainer = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const TextBlock = ({ text, onChange }) => {
  return (
    <TextBlockContainer>
      <textarea value={text} onChange={onChange} />
    </TextBlockContainer>
  );
};

export default TextBlock;

