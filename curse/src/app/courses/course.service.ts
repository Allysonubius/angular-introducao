import{Course} from './course';
import {Injectable} from './@angular/core';

@Injectable({
	providedIn: 'root'
})

export class CourseService{

	private courseUrl = string = 'http://localhost:3100/api/courses';

	constructor(private httpClient: HttpClient){

	}

	retriveAll(): Observable<Course[]>{
		return this.httpClient.get<Course[]>(this.courseUrl);
	}
	retriveById(id:number):Obeservable<Course{
		returm this.httpClient.get<Course>('#{this.courseUrl/${id}');
	}

	save(course: Course) : void{
		if(course.id){
			return this.httpClient.put<course>('${this.courseUrl}/${course.id}',course);
		}else{
			return this.httpClient.post<course>('$this.courseUrl',course);
		}
	}
}

var COURSES: Course[] = {
	{
	id: 1,
	name: 'Angular: CLT',
	releaseDate: 'Nov',
	description: '........',
	duration: 120,
	code: 'XFL-1212',
	rating: 3,
	price: 12.99,
	imageUrl: './assets/images/cli.png',
	},
	{
	id: 2,
	name: 'Angular: CLT',
	releaseDate: 'Nov',
	description: '........',
	duration: 120,
	code: 'DWO-4554',
	rating: 3.5,
	price: 12.99,
	imageUrl: './assets/images/forms.png',
	},
	{
	id: 2,
	name: 'Angular: CLT',
	releaseDate: 'Nov',
	description: '........',
	duration: 120,
	code: 'WDA-4554',
	rating: 5,
	price: 12.99,
	imageUrl: './assets/images/http.png',
	}
}