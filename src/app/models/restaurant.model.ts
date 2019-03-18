import { MapLocation } from './map-location.model';

export class Restaurant extends MapLocation {
	restaurantId: number;
	name: string;
	location: string;
	types: string[];
	imgRef: string;
}