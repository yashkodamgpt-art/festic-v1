import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Dashboard from './components/Dashboard';
import UpcomingEventsSection from './components/UpcomingEventsSection';
import EventDetail from './components/EventDetail';
import type { User, Event } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedEvent(null); // Also clear event view on logout
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };


  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header user={currentUser} onLoginClick={openLoginModal} onLogoutClick={handleLogout} />
      <main className="flex-grow">
        {selectedEvent ? (
          <EventDetail event={selectedEvent} onBack={handleBack} />
        ) : currentUser ? (
          <Dashboard user={currentUser} onEventClick={handleEventSelect} />
        ) : (
          <>
            <HeroSection onGetStarted={openLoginModal} />
            <UpcomingEventsSection onEventClick={handleEventSelect} />
            <FeaturesSection />
          </>
        )}
      </main>
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default App;