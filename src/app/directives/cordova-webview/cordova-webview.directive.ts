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
	selector: "[cordovaWebview]"
})

export class CordovaWebviewDirective {

	@Input() url: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runCordovaWebview(this.url);
	}


	
	/**
	* runCordovaWebview($url)
	* @param string $url = "http://ihsana.com"
	**/
	
	private runCordovaWebview(url: string){
		let urlAddr = url || "http://ihsana.com";
		this.inAppBrowser.create(urlAddr,"_self");
	}
	


}
