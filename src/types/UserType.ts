export type User = {
  id: number;
  name: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  };
  education: {
    highestLevel: string;
    institute: string;
    year: number;
  };
  preferences: {
    hobbies: string[];
  };
};
