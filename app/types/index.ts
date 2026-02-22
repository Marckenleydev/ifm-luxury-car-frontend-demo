// types/car.types.ts

export type Car = {
  _id: string;
  brand: string;
  model: string;
  year: number;
  plateNumber: string;
  color: string;
  seats: number;
  images: string[];
  transmission: 'MANUAL' | 'AUTOMATIC' | 'SEMI_AUTOMATIC' | 'CVT';
  fuelType: 'PETROL' | 'DIESEL' | 'ELECTRIC' | 'HYBRID' | 'PLUGIN_HYBRID';
  pricePerDay: number;
  status: 'AVAILABLE' | 'BOOKED' | 'UNDER_MAINTENANCE' | 'RESERVED' | 'OUT_OF_SERVICE';
  createdAt: string;
  updatedAt: string;
}


export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

// Types to match your Prisma schema
export type UserProfile = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  addresses: Address[];
  
 
};


export type Address = {
  id: string;
 
  street: string
  postalCode: string
  city: string
  country: string
};


// API Response type
export type CarsApiResponse = {
  success: boolean;
  data: Car[];
}

// Single Car API Response type
export type CarApiResponse = {
  success: boolean;
  data: Car;
}

export interface Booking {
  _id: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  car: {
    _id: string;
    brand: string;
    model: string;
    year: number;
    images: string[];
    pricePerDay: number;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  createdAt: string;
}

export interface CreateMessageDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CreateTestimonialDTO {
  rating: number;
  comment: string;
}
