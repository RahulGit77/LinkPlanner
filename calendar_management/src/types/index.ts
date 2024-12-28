//  Communication Method
export type CommunicationMethod = {
  id: string; // Unique identifier for the communication method
  name: string; // Name of the communication method (e.g., Email, Phone Call)
  description: string; // Description of the communication method
  sequence: number; // Order in which the method should be used
  isMandatory: boolean; // Indicates if the method is mandatory
};

// Communication
export type Communication = {
  id: string; // Unique identifier for the communication
  companyId: string; // ID of the company associated with this communication
  methodId: string; // ID of the communication method used
  date: Date; // Date of the communication
  notes: string; // Additional notes related to the communication
};

// Company
export type Company = {
  id: string; // Unique identifier for the company
  name: string; // Name of the company
  location: string; // Location of the company
  linkedinProfile: string; // LinkedIn profile URL of the company
  emails: string[]; // List of email addresses associated with the company
  phoneNumbers: string[]; // List of phone numbers associated with the company
  communicationPeriodicity: number; // Frequency of communication in days
  comments: string; // Additional comments about the company
};