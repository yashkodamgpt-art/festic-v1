import React from 'react';
import EventCard from './EventCard';
import { MOCK_EVENTS, MOCK_APPLICATIONS, MOCK_VENDORS } from '../constants';
import type { Application } from '../types';
import { ApplicationStatus } from '../types';

const statusStyles: Record<ApplicationStatus, string> = {
    [ApplicationStatus.Pending]: 'bg-accent/20 text-accent',
    [ApplicationStatus.Approved]: 'bg-success/20 text-success-dark', // Using a darker text for readability on light green
    [ApplicationStatus.Rejected]: 'bg-danger/20 text-danger-dark', // Using a darker text for readability on light red
};

const VendorDashboard: React.FC<{ userId: string }> = ({ userId }) => {
    // For demo, assume current vendor is the first one in MOCK_VENDORS
    const currentVendorId = MOCK_VENDORS[0].id;
    const myApplications = MOCK_APPLICATIONS.filter(app => app.vendorId === currentVendorId);

    const getEventById = (id: string) => MOCK_EVENTS.find(e => e.id === id);

    return (
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Available Opportunities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                     {MOCK_EVENTS.map(event => (
                        <EventCard 
                            key={event.id} 
                            event={event} 
                            actionButton={
                                <button 
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-colors duration-300"
                                >
                                    Apply to Showcase
                                </button>
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-text-primary mb-6">My Applications</h2>
                <div className="space-y-4 bg-surface p-4 rounded-lg">
                    {myApplications.map(app => {
                        const event = getEventById(app.eventId);
                        if (!event) return null;
                        return (
                            <div key={app.id} className="bg-background p-4 rounded-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-text-primary">{event.name}</p>
                                        <p className="text-sm text-text-secondary">{event.university}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[app.status]}`}>
                                        {app.status}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;