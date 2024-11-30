interface BaseFields {
  name: string;
  photoUrl: string;
  description?: string;
}

export interface Trip extends BaseFields {}

interface Location extends BaseFields {
  coordinates?: string;
}
interface Activity extends BaseFields {}
interface Eatery extends BaseFields {}

export interface Entry extends BaseFields {
  date: number;
  totalTravelTime: number;
  stayed: Location;
  activities: Activity[];
  food: Eatery[];
  stops?: string[];
}
