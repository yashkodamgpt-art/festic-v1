// Fix: Created types.ts file with required type definitions.
export enum Role {
  Host = 'University Host',
  Vendor = 'Vendor',
  Student = 'Student',
}

export enum ApplicationStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Vendor {
  id: string;
  businessName: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  university: string;
  hostId: string;
  description: string;
  expectedFootfall: number;
  imageUrl: string;
  tags: string[];
}

export interface Application {
  id: string;
  vendorId: string;
  eventId: string;
  status: ApplicationStatus;
}
