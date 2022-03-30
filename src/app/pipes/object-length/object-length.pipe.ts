/**
* @author azietuasikal <setiam3@gmail.com>
* @copyright eAbsen 2022
* @version 01.01.01
* @license licenses.txt
*
* @date 2022-03-30 07:42:16
**/

import { Pipe, PipeTransform } from "@angular/core";

/**
 * ObjectLength pipe
 * Get the object length

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "objectLength",
})

export class ObjectLengthPipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(obj:any): number{

			let keys = Object.keys(obj);
			return keys.length;


	}
}
