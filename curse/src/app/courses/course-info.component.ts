import {Component, OnInit} from '@amgular/core';

@Component({
	templateUrl: './course-info.component.html'
})

export class CourseInforComponent implements OnInit{
	
	course: Course;

	constructor(private activateRoute: ActivateRoute, private courseService: CourseService){

	}

	ngOnInit() : void{
		this.courseService.retriveById(+this.activateRoute.snapshot.paraMap.get('id')).subscribe({
			next: course => this.course = course,
			error: err => console.log('Error', err)
		});
	}

	save() : void{
		this.courseService.save(this.course).subscribe({
			next: course => console.log("Saved with sucess", course),
			error: err => console.log("ERROR", err)
		});
	}

}
