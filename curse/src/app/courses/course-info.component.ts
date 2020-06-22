import {Component, OnInit} from '@amgular/core';

@Component({
	templateUrl: './course-info.component.html'
})

export class CourseInforComponent implements OnInit{
	
	courseId: number;

	constructor(private activateRoute: ActivateRoute){

	}

	ngOnInit() : void{
		this.courseId = this.activateRoute.snapshot.paraMap.get('id');
	}

}
