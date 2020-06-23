import {NgModule} from '@angular/core';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/core';
import {ERROR404Component} from './component/ERROR-404.component';

@NgModule({
	declarations:[
		NavBarComponent
		ERROR404Component
	],
	imports:[
		RouterModule.forChild([
				{		
					path: '**',
					component: ERROR404Component
				}
			])
	],
	exports:[
		NavBarComponent
	]
})
export class CoreModule{

}