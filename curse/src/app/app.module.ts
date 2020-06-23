import {BrowserModule} from '@angular/platform-browser';
import {NgModule}  from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CourseModule} from './courses/course.module';
import {ERROR404Component} from './courses/ERROR404/ERROR-404.component';

@NgModule({
	declarations:[
		AppComponent,
		NavBarComponent,
		ERROR404Component
	],
	imports:[
		BrowserModule,
		HttpClientModule,
		CourseModule,
		RouterModule.forRoot([
			{
				path: '', 
				redirectTo: 'courses',
				pathMatch: 'full'
			},
			{
				path: '**',
				component: ERROR404Component
			}
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule{}