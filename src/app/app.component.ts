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
})
export class AppComponent implements OnInit {

  courses = COURSES;


  constructor(private courseService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig) {


  }

  ngOnInit() {
  }




  save(course: Course) {
    this.courseService.saveCourse(course).subscribe(
      () => console.log('Course Saved!')
    );

  }

  onEditCourse() {

    this.courses[0] = {...this.courses[0], description: 'ngOnChanges'};

    // this.courses = [undefined];
  //   const course = this.courses[0];
  //   const newCourse = {...course};
  //   newCourse.description = 'New value!!!';
  //   this.courses[0] = newCourse;
  //
  }


}
