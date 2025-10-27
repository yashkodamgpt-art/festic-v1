import React from 'react';
import type { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  actionButtons?: React.ReactNode;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, actionButtons }) => {
  return (
    <div className="bg-background rounded-lg p-4 flex items-start space-x-4 transition-all duration-200 hover:bg-border/60">
      <img src={vendor.imageUrl} alt={vendor.businessName} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
      <div className="flex-grow">
        <div className="flex justify-between items-center">
            <div>
                <h4 className="font-bold text-text-primary">{vendor.businessName}</h4>
                <p className="text-sm text-primary font-medium">{vendor.category}</p>
            </div>
            {actionButtons && <div className="flex space-x-2">{actionButtons}</div>}
        </div>
        <p className="text-sm text-text-secondary mt-2">{vendor.description}</p>
      </div>
    </div>
  );
};

export default VendorCard;