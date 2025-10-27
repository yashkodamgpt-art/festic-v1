import React, { useState, useMemo } from 'react';
import { MOCK_EVENTS } from '../constants';
import EventCard from './EventCard';
import type { Event } from '../types';

interface UpcomingEventsSectionProps {
    onEventClick: (event: Event) => void;
}

const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ onEventClick }) => {
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        MOCK_EVENTS.forEach(event => event.tags.forEach(tag => tags.add(tag)));
        return ['All', ...Array.from(tags)];
    }, []);

    const [activeTag, setActiveTag] = useState('All');

    const filteredEvents = useMemo(() => {
        if (activeTag === 'All') {
            return MOCK_EVENTS;
        }
        return MOCK_EVENTS.filter(event => event.tags.includes(activeTag));
    }, [activeTag]);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Don't Miss Out!</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
                        Explore the most anticipated fests and events happening across the country.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-10">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                activeTag === tag
                                    ? 'bg-primary text-white'
                                    : 'bg-surface text-text-secondary hover:bg-border'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventsSection;