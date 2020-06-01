import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ArrayObjectService {

	constructor() { }

	objectToArray(data){
		return Object.entries(data);
	}

	arrayToObject(array, key){

		const initialValue = {};

		return array.reduce((obj, item) => {
			return {
				...obj,
				[item[key]]: item,
			};
		}, initialValue);

	}
}
