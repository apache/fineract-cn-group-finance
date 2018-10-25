import {ContactDetail} from '../../domain/contact/contact-detail.model';

export interface Center {
  identifier: string;
  givenName: string;
  middleName?: string;
  surname: string;
  assignedOffice?: string;
  contactDetails: ContactDetail[];
}