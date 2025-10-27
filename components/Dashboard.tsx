import React from 'react';
import { Role } from '../types';
import type { User, Event } from '../types';
import StudentDashboard from './StudentDashboard';
import VendorDashboard from './VendorDashboard';
import HostDashboard from './HostDashboard';

interface DashboardProps {
    user: User;
    onEventClick: (event: Event) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onEventClick }) => {

    const renderDashboardContent = () => {
        switch (user.role) {
            case Role.Student:
                return <StudentDashboard onEventClick={onEventClick} />;
            case Role.Vendor:
                return <VendorDashboard userId={user.id} />;
            case Role.Host:
                return <HostDashboard userId={user.id} />;
            default:
                return <p>Invalid user role.</p>;
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-lg text-text-secondary">Here's what's happening in your world.</p>
            </div>
            {renderDashboardContent()}
        </div>
    );
};

export default Dashboard;