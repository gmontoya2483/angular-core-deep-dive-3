import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CoursesService} from './services/courses.service';
import {APP_CONFIG, AppConfig, CONFIG_TOKEN} from './config';


// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
//
// }
//
// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // providers: [
  //   // {provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG}
  //   {provide: CONFIG_TOKEN, useValue: APP_CONFIG}
  // ]
  // providers: [
  //   CoursesService
  // ]
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>;
  // courses = COURSES;

  courses: Course[];

  constructor(private courseService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig) {


  }

  ngOnInit() {
    // this.courses$ = this.courseService.loadCourses();
    this.courseService.loadCourses().subscribe(courses => {
      this.courses = courses;


    });
  }




  save(course: Course) {
    this.courseService.saveCourse(course).subscribe(
      () => console.log('Course Saved!')
    );

  }

  onEditCourse() {
  //   const course = this.courses[0];
  //   const newCourse = {...course};
  //   newCourse.description = 'New value!!!';
  //   this.courses[0] = newCourse;
  //
  }


}
