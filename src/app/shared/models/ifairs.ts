export interface Ifairs {
  fairId: string;
  fairName: string;
  startDate: number;
  endDate: number;
  timezoneId: string;
  location: Ilocation | null;
  numberOfUsersRegistered: number;
  numberOfSchoolsRegistered: number;
  isCandidateRegistered: boolean;
  bannerUrl: string;
  showRegisteredUsersToCandidate: boolean;
  showRegisteredUsersToSchools: boolean;
  showRegisteredSchoolsToCandidate: boolean;
  showRegisteredSchoolsToSchools: boolean;
  fairStatus: string;
  fairStartTime: string;
  fairEndTime: string;
  type: 'InPerson' | 'Virtual';
  candidateDescription: string;
  schoolDescription: string;
}

export interface Ilocation {
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
