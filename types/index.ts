export enum BedType {
  SINGLE,
  DOUBLE,
  KING,
  BUNKBED
}

export interface Bed {
  type: BedType;
  numberOfPeople: number;
}

export enum AccommodationType {
  COTTAGE
}

export interface Accommodation {
  id: string;
  name: string;
  // type: AccommodationType;
  beds: BedType[];
  sleeps: number;
}

export interface AccommodationAvailability {
  accommodation: Accommodation;
  arrival: Date;
  departure: Date;
  priceInPence: number;
}