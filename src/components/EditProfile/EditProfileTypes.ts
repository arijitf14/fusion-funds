export interface UserProfile {
    firstName: string;
    middleName: string;
    lastName: string;
    country: string;
    city: string;
    state: string;
    zipCode: string;
    addressLine1: string;
    addressLine2: string;
  }
  export type UserData = {
    profileData: {
      firstName: string;
      middleName: string;
      lastName: string;
      country: string;
      city: string;
      state: string;
      zipCode: string;
      addressLine1: string;
      addressLine2: string;
    };
  };
  