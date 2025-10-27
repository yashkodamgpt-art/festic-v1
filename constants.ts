// Fix: Created constants.ts file with mock data.
import { Role, ApplicationStatus, User, Vendor, Event, Application } from './types';

export const MOCK_USERS: User[] = [
  { id: 'user-1', name: 'Alice Johnson', email: 'alice@university.edu', role: Role.Host },
  { id: 'user-2', name: 'Bob\'s Burgers', email: 'bob@burgers.com', role: Role.Vendor },
  { id: 'user-3', name: 'Charlie Davis', email: 'charlie@student.edu', role: Role.Student },
];

export const MOCK_VENDORS: Vendor[] = [
    {
        id: 'vendor-1',
        businessName: 'The Rolling Taco',
        category: 'Food Truck',
        description: 'Authentic Mexican street tacos, burritos, and quesadillas made with fresh ingredients.',
        imageUrl: 'https://images.unsplash.com/photo-1568202379365-15014389e0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'vendor-2',
        businessName: 'Craft Corner',
        category: 'Handmade Goods',
        description: 'Unique handmade jewelry, pottery, and art prints from local artists.',
        imageUrl: 'https://images.unsplash.com/photo-1599839578018-8b387220268a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'vendor-3',
        businessName: 'Gamer\'s Paradise',
        category: 'Gaming Zone',
        description: 'Mobile gaming station with the latest consoles, VR experiences, and classic arcade games.',
        imageUrl: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
     {
        id: 'vendor-4',
        businessName: 'Acoustic Vibes',
        category: 'Live Music',
        description: 'Solo and duo acoustic performers playing a mix of popular covers and original music.',
        imageUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];

export const MOCK_EVENTS: Event[] = [
    {
        id: 'event-1',
        name: 'TechNova 2024',
        date: 'October 26-28, 2024',
        university: 'State University',
        hostId: 'user-1',
        description: 'A three-day celebration of technology and innovation, featuring hackathons, guest speakers, and futuristic exhibits.',
        expectedFootfall: 5000,
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['Technology', 'Hackathon', 'Innovation', 'Workshops'],
    },
    {
        id: 'event-2',
        name: 'Spring Fest',
        date: 'April 15, 2025',
        university: 'Greenwood College',
        hostId: 'user-4', // Another host
        description: 'The annual spring music and arts festival. Join us for live bands, food trucks, and student art showcases.',
        expectedFootfall: 8000,
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['Music', 'Arts', 'Food', 'Live Performances'],
    },
    {
        id: 'event-3',
        name: 'Culturama',
        date: 'November 5, 2024',
        university: 'State University',
        hostId: 'user-1',
        description: 'A vibrant celebration of diversity and culture. Experience traditions from around the world through food, dance, and music.',
        expectedFootfall: 3500,
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['Culture', 'Diversity', 'Food', 'Dance'],
    }
];

export const MOCK_APPLICATIONS: Application[] = [
    { id: 'app-1', vendorId: 'vendor-1', eventId: 'event-1', status: ApplicationStatus.Approved },
    { id: 'app-2', vendorId: 'vendor-3', eventId: 'event-1', status: ApplicationStatus.Approved },
    { id: 'app-3', vendorId: 'vendor-2', eventId: 'event-1', status: ApplicationStatus.Pending },
    { id: 'app-4', vendorId: 'vendor-1', eventId: 'event-2', status: ApplicationStatus.Rejected },
    { id: 'app-5', vendorId: 'vendor-4', eventId: 'event-2', status: ApplicationStatus.Approved },
    { id: 'app-6', vendorId: 'vendor-2', eventId: 'event-3', status: ApplicationStatus.Pending },
    { id: 'app-7', vendorId: 'vendor-4', eventId: 'event-3', status: ApplicationStatus.Pending },
];
