import { Property } from '../models/Property';
import * as moment from 'moment';

export const propertiesList: Property[] = [
  {
    propertyId: 1,
    propertyType: 'Townhouse',
    propertyAddress: 'Ghazela,ariana',
    propertyImageUrl: './assets/images/house-6.jpg',
    price: 678.1,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 1))
    ).fromNow(),
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    squareMeters: 240,
    buy: true,
    rent: false,
  },
  {
    propertyId: 2,
    propertyType: 'Apartment',
    propertyAddress: 'Ariana',
    propertyImageUrl: './assets/images/house-7.jpg',
    price: 540.145,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 2))
    ).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 2,
    squareMeters: 163,
    buy: false,
    rent: true,
  },
  {
    propertyId: 3,
    propertyType: 'Apartment',
    propertyAddress: 'Marsa',
    propertyImageUrl: './assets/images/house-3.jpeg',
    price: 235.25,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
    squareMeters: 88,
    buy: true,
    rent: false,
  },
  {
    propertyId: 4,
    propertyType: 'House',
  propertyAddress: 'Bardo',
    propertyImageUrl: './assets/images/house-4.jpeg',
    price: 789.25,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 2,
    numberOfBedrooms: 3,
    squareMeters: 371,
    buy: false,
    rent: true,
  },
  {
    propertyId: 5,
    propertyType: 'Apartment',
  propertyAddress: 'Manar',
    propertyImageUrl: './assets/images/house-5.jpeg',
    price: 432.23,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 3,
    squareMeters: 223,
    buy: true,
    rent: false,
  },
];
