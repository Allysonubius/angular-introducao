import {Component, OnInit} from '@amgular/core';

@Component({
	templateUrl: './course-info.component.html'
})

export class CourseInforComponent implements OnInit{
	
	course: Course;

	constructor(private activateRoute: ActivateRoute, private courseService: CourseService){

	}

	ngOnInit() : void{
		this.course = this.courseService.retriveById(+this.activateRoute.snapshot.paraMap.get('id'));
	}

	save() : void{
		this.courseService.save(this.course);
	}

}
