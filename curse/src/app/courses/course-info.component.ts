import {Component, OnInit} from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
	
	course: Course;

	constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){}

	ngOnInit() : void{
		this.courseService.retriveById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
			next: course => this.course = course,
			error: err => console.log('Error', err)
		});
	}
/*
	save(): void{
		this.courseService.save(this.course).submit[{
			next: course => console.log("Saved with sucess", course),
			error: err => console.log("ERROR", err)
		});
	}

*/}
