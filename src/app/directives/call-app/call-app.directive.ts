/**
* @author azietuasikal <setiam3@gmail.com>
* @copyright eAbsen 2022
* @version 01.01.01
* @license licenses.txt
*
* @date 2022-03-30 07:42:16
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { InAppBrowserOptions } from "@awesome-cordova-plugins/in-app-browser/ngx";

@Directive({
	selector: "[callApp]"
})

export class CallAppDirective {

	@Input() phoneNumber: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runDialApp(this.phoneNumber);
	}


	
	/**
	* runDialApp($phone_number)
	* @param string $phone_number = "082233333734"
	**/
	
	public runDialApp(phone_number: string){
		let phoneNumber = phone_number || "08123456789";
		let urlSchema = "tel:" + phoneNumber ;
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}
