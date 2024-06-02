// src/utils/mockData.js
const mockLandingPages = [
    {
      id: 'page1',
      title: 'Landing Page 1',
      description: 'This is the first landing page.',
      components: [
        {
          type: 'text',
          content: 'Welcome to Landing Page 1!',
        },
        {
          type: 'image',
          src: 'https://via.placeholder.com/300x200',
          alt: 'Sample Image',
        },
      ],
    },
    {
      id: 'page2',
      title: 'Landing Page 2',
      description: 'This is the second landing page.',
      components: [
        {
          type: 'text',
          content: 'This is Landing Page 2!',
        },
      ],
    },
  ];
  
  export default mockLandingPages;