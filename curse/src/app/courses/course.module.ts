import { StarComponent } from './../star/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list.component';
import {CourseInfoComponent} from './course-info.component';
import {ReplacePipe} from '../pipe/replace.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations:[
		CourseListComponent,
		CourseInfoComponent,
		ReplacePipe,
		StarComponent
	], 
	imports:[
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'courses/info/:id',
				component: CourseInfoComponent
			},
			{
				path: 'courses',
				component:CourseListComponent
			}
		])
	]
})

export class CourseModule{

}