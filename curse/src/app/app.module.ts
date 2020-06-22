import {BrowserModule} from '@angular/platform-browser';
import {NgModule}  from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CourseListComponent} from './courses/course-list.component';
import {StarComponent} from './star/star.component';
import {ReplacePipe} from './pipe/replace.pipe';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CourseInfoComponent} from './courses/course-info.component';

@NgModule({
	declarations:[
		AppComponent,
		CourseListComponent,
		StarComponent,
		ReplacePipe,
		navBarComponent,
		ERROR404Component,
		CourseInfoComponent
	],
	imports:[
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{
				path: '', 
				redirectTo: 'courses',
				pathMatch: 'full'
			},
			{
				path: 'courses/info/:id',
				component: CourseInfoComponent
			},
			{
				path: 'courses',
				component:CourseListComponent
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