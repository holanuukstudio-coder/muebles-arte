export type ContactRequestStatus = "new" | "in_review" | "closed" | "archived";

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  status: ContactRequestStatus;
  source: "contact-page";
  createdAt: string;
  updatedAt: string;
};

export type ContactRequestInput = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
};
