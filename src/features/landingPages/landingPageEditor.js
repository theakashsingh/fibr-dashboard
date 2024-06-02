// src/features/landingPages/LandingPageEditor.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLandingPage } from './landingPagesSlice';
// import TextBlock from '../../components/TextBlock';
import TextBlock from '@/component/TextBlock';
// import Image from '../../components/Image';
import Image from '@/component/Image';

const LandingPageEditor = ({ id }) => {
  const dispatch = useDispatch();
  const landingPage = useSelector((state) =>
    state.landingPages.landingPages.find((page) => page.id === id)
  );
  

  const [components, setComponents] = useState(landingPage ? landingPage.components : []);

  if (!landingPage) {
    return <div>Loading...</div>;
  }

  const addTextBlock = () => {
    setComponents([...components, { type: 'text', content: '' }]);
  };

  const addImage = () => {
    setComponents([...components, { type: 'image', src: '', alt: '' }]);
  };

  const handleComponentChange = (index, field, value) => {
    const updatedComponents = [...components];
    updatedComponents[index][field] = value;
    setComponents(updatedComponents);
  };
  
  const removeComponent = (index) => {
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
  };
  
  const handlePublish = () => {
    const updatedLandingPage = {
      id: landingPage.id,
      title: landingPage.title,
      description: landingPage.description,
      components,
    };
    dispatch(updateLandingPage(updatedLandingPage));
    // Implement logic to change the status to "Live"
  };
  
  return (
    <div>
      <h2>Edit Landing Page</h2>
      <div>
        <button onClick={addTextBlock}>Add Text Block</button>
        <button onClick={addImage}>Add Image</button>
      </div>
      {components.map((component, index) => (
        <div key={index}>
          {component.type === 'text' ? (
            <div>
              <TextBlock
                text={component.content}
                onChange={(e) =>
                  handleComponentChange(index, 'content', e.target.value)
                }
              />
              <button onClick={() => removeComponent(index)}>Remove</button>
            </div>
          ) : (
            <div>
              <Image
                src={component.src}
                alt={component.alt}
                onSrcChange={(e) =>
                  handleComponentChange(index, 'src', e.target.value)
                }
                onAltChange={(e) =>
                  handleComponentChange(index, 'alt', e.target.value)
                }
              />
              <button onClick={() => removeComponent(index)}>Remove</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
  };
  
  export default LandingPageEditor;