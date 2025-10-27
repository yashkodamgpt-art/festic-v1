// Fix: Created HostDashboard.tsx component.
import React, { useState, useMemo } from 'react';
import { MOCK_EVENTS, MOCK_APPLICATIONS, MOCK_VENDORS } from '../constants';
import type { Event, Application, Vendor } from '../types';
import { ApplicationStatus } from '../types';
import VendorCard from './VendorCard';

interface HostDashboardProps {
  userId: string;
}

const HostDashboard: React.FC<HostDashboardProps> = ({ userId }) => {
  const myEvents = useMemo(() => MOCK_EVENTS.filter(event => event.hostId === userId), [userId]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(myEvents.length > 0 ? myEvents[0].id : null);

  const selectedEvent = myEvents.find(e => e.id === selectedEventId);

  const eventApplications = useMemo(() => {
    if (!selectedEventId) return [];
    return MOCK_APPLICATIONS.filter(app => app.eventId === selectedEventId);
  }, [selectedEventId]);

  const getVendorById = (id: string) => MOCK_VENDORS.find(v => v.id === id);
  
  const renderApplicationCard = (app: Application) => {
      const vendor = getVendorById(app.vendorId);
      if(!vendor) return null;

      return (
        <VendorCard 
            key={app.id}
            vendor={vendor}
            actionButtons={
                <div className="flex space-x-2">
                     <button className="px-3 py-1 text-sm font-semibold text-success-dark bg-success/20 rounded-md hover:bg-success/30">Approve</button>
                     <button className="px-3 py-1 text-sm font-semibold text-danger-dark bg-danger/20 rounded-md hover:bg-danger/30">Reject</button>
                </div>
            }
        />
      );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-text-primary mb-6">My Events</h2>
        <div className="space-y-3">
          {myEvents.map(event => (
            <button
              key={event.id}
              onClick={() => setSelectedEventId(event.id)}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                selectedEventId === event.id ? 'bg-primary text-white shadow-lg' : 'bg-surface hover:bg-border'
              }`}
            >
              <p className="font-bold text-lg">{event.name}</p>
              <p className={selectedEventId === event.id ? 'text-white/80' : 'text-text-secondary'}>{event.date}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2">
         {selectedEvent ? (
             <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Vendor Applications for <span className="text-primary">{selectedEvent.name}</span></h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-text-secondary mb-3 border-b border-border pb-2">Pending Review ({eventApplications.filter(a => a.status === ApplicationStatus.Pending).length})</h3>
                        <div className="space-y-4">
                            {eventApplications
                                .filter(app => app.status === ApplicationStatus.Pending)
                                .map(renderApplicationCard)
                            }
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-text-secondary mb-3 border-b border-border pb-2">Approved ({eventApplications.filter(a => a.status === ApplicationStatus.Approved).length})</h3>
                        <div className="space-y-4">
                            {eventApplications
                                .filter(app => app.status === ApplicationStatus.Approved)
                                .map(app => {
                                     const vendor = getVendorById(app.vendorId);
                                     if(!vendor) return null;
                                     return <VendorCard key={app.id} vendor={vendor} />
                                })
                            }
                        </div>
                    </div>
                </div>
             </div>
         ) : (
            <div className="bg-surface p-8 rounded-lg text-center">
                <h2 className="text-xl font-bold text-text-primary">No event selected</h2>
                <p className="text-text-secondary mt-2">Select an event from the list to view applications.</p>
            </div>
         )}
      </div>
    </div>
  );
};

export default HostDashboard;
