/**
* @author azietuasikal <setiam3@gmail.com>
* @copyright eAbsen 2022
* @version 01.01.01
* @license licenses.txt
*
* @date 2022-03-30 07:42:16
**/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaqsPage } from "./faqs.page";

const routes: Routes = [
	{
		path: "",
		component: FaqsPage,
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FaqsPageRoutingModule {}
