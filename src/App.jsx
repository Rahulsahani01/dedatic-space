import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WorkingProcess from './components/WorkingProcess';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import RequestModal from './components/RequestModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Navbar onOpenModal={openModal} />
      <Header onOpenModal={openModal} />
      <CompanyLogos />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
      <RequestModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default App;
