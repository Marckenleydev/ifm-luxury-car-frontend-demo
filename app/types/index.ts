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