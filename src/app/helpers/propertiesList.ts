import { Property } from '../models/Property';
import * as moment from 'moment';

export const propertiesList: Property[] = [
  {
    propertyId: 1,
    propertyType: 'Townhouse',
    propertyAddress: '4 Mercer St',
    propertyImageUrl: './assets/images/house-1.jpeg',
    price: 678.1,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 1))
    ).fromNow(),
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    squareMeters: 240,
  },
  {
    propertyId: 2,
    propertyType: 'Apartment',
    propertyAddress: '304a Poplar Hight St',
    propertyImageUrl: './assets/images/house-2.jpeg',
    price: 540.145,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 2))
    ).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 2,
    squareMeters: 163,
  },
  {
    propertyId: 3,
    propertyType: 'Apartment',
    propertyAddress: "5-10 St. Martin's PI",
    propertyImageUrl: './assets/images/house-3.jpeg',
    price: 235.25,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
    squareMeters: 88,
  },
];
