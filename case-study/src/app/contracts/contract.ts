import {Customer} from '../customer/customer';
import {Facility} from '../facility/facility';

export interface Contract {
  id?: number;
  code?: string;
  customer?: Customer;
  service?: Facility;
  startDate?: string;
  endDate?: string;
  deposit?: number;
}
