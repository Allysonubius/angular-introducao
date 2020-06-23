import {BrowserModule} from '@angular/platform-browser';
import {NgModule}  from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CourseModule} from './courses/course.module';
import {CoreModule} from './core/core.module';

@NgModule({
	declarations:[
		AppComponent,
		NavBarComponent
	],
	imports:[
		BrowserModule,
		HttpClientModule,
		CourseModule,
		CoreModule,
		RouterModule.forRoot([
			{
				path: '', 
				redirectTo: 'courses',
				pathMatch: 'full'
			},
			
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule{}