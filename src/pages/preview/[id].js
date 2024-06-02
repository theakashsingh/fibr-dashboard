
import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// import Header from '../../components/Header';
import Header from '@/component/Header';
// import Footer from '../../components/Footer';
import Footer from '@/component/Footer';
// import TextBlock from '../../components/TextBlock';
import TextBlock from '@/component/TextBlock';
// import Image from '../../components/Image';
import Image from '@/component/Image';

const Preview = () => {
  const router = useRouter();
  const { id } = router.query;

  const landingPage = useSelector((state) =>
    state.landingPages.landingPages.find((page) => page.id === id)
  );

  return (
    <div>
      <Header />
      <h2>Landing Page Preview</h2>
      {landingPage &&
        landingPage.components.map((component, index) => (
          <div key={index}>
            {component.type === 'text' ? (
              <TextBlock text={component.content} />
            ) : (
              <Image src={component.src} alt={component.alt} />
            )}
          </div>
        ))}
      <Footer />
    </div>
  );
};

export default Preview;

// import React from 'react';
// import { useRouter } from 'next/router';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import TextBlock from '../../components/TextBlock';
// import Image from '../../components/Image';
// import mockLandingPages from '../../utils/mockData';

// export const getServerSideProps = async ({ params }) => {
//   const { id } = params;

//   // For demonstration purposes, we'll use the mock data
//   const landingPage = mockLandingPages.find((page) => page.id === id);

//   // Return the landing page data as props
//   return {
//     props: {
//       landingPage: landingPage || null,
//     },
//   };
// };

// const Preview = ({ landingPage }) => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Render the landing page preview only if the data is available
//   if (!landingPage) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <h2>Landing Page Preview</h2>
//       {landingPage.components.map((component, index) => (
//         <div key={index}>
//           {component.type === 'text' ? (
//             <TextBlock text={component.content} />
//           ) : (
//             <Image src={component.src} alt={component.alt} />
//           )}
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// };

// export default Preview;