import React from 'react';
import Provider from '../../comps/provider/Provider';
import SectionOne from '../../comps/section-one/SectionOne';
import SectionTwo from '../../comps/section-two/SectionTwo';
import SectionThree from '../../comps/section-three/SectionThree';

const HomePage = () => {
  return (
    <div>
      <Provider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default HomePage;
