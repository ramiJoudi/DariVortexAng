export interface Property {
  propertyId: number;
  propertyType: string;
  propertyAddress: string;
  propertyImageUrl: string;
  price: number;
  timeAdded: Date | string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  squareMeters: number;
  buy: boolean;
  rent: boolean;


}
