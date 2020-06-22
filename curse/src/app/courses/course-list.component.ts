import { Component, OnInit } from '@angular/core';
import { Course} from './course';

@Component({
    selector:'app-course-list',
    template: '<h2> Course List </h2>'
})
export class CourseListComponent implements OnInit{
	
	courses: Course[] =	[];

	constructor(private courseService: CourseService){

	}

	ngOnInit(): void{
		this.courses = this.courseService.retriveAll();	
	}
}