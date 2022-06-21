import {VehicleType} from './vehicleType';
import {CoachStation} from './coach-station';

export interface Vehicle {
  id?: number;
  numberPlate?: string;
  types?: VehicleType;
  coachStation?: CoachStation;
  startSpot?: string;
  stopSpot?: string;
  phoneNumber?: string;
  email?: string;
  startTime?: string;
  stopTime?: string;
}
