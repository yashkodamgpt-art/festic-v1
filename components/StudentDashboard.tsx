import React, { useState } from 'react';
import EventCard from './EventCard';
import { MOCK_EVENTS } from '../constants';
import type { Event } from '../types';

interface StudentDashboardProps {
    onEventClick: (event: Event) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onEventClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const filteredEvents = MOCK_EVENTS.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.university.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleGetPass = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }
    
    return (
        <div>
            {showSuccess && (
                 <div className="fixed top-20 right-5 bg-secondary text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-out">
                    Pass successfully claimed! Check your email.
                </div>
            )}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search for events or universities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-lg bg-surface border-border rounded-lg shadow-sm py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                    <EventCard 
                        key={event.id} 
                        event={event}
                        onClick={() => onEventClick(event)}
                        actionButton={
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleGetPass();
                                }} 
                                className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-colors duration-300"
                            >
                                Get Pass
                            </button>
                        }
                    />
                ))}
            </div>
            <style>{`
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0; transform: translateY(-20px); }
                    10%, 90% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-out {
                    animation: fadeInOut 3s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default StudentDashboard;