import React from 'react';
import { UniversityIcon, VendorIcon, StudentIcon } from './IconComponents';

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300">
        <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <UniversityIcon className="w-8 h-8" />,
            title: 'For Hosts',
            description: 'Effortlessly manage your entire fest, from promoting events to finding and approving the best vendors for your campus.',
        },
        {
            icon: <VendorIcon className="w-8 h-8" />,
            title: 'For Vendors',
            description: 'Discover amazing opportunities to showcase your products, talents, or services to thousands of students. Apply with a single click.',
        },
        {
            icon: <StudentIcon className="w-8 h-8" />,
            title: 'For Students',
            description: 'Explore the hottest events happening on your campus and others. Get passes, stay updated, and never miss out on the fun.',
        },
    ];

    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">A Platform for Everyone</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
                        Whether you're organizing, showcasing, or attending, Festic has you covered.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;