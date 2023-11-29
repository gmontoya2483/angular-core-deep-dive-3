import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
     // providers: [CoursesService]
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    // @Input()
    // type: string;



    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private courseService: CoursesService,
                @Attribute('type') private type: string) {

      console.log('Constructor...', this.course);
    }

    ngOnInit() {

      console.log('ngOnInit', this.course);

      }


  ngOnChanges(changes) {

    console.log('ngOnChanges', changes);

  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

    // Set focus, scrolling, etc... DOM operations


  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }


  onTitleChanged(newTitle: string) {
      this.course.description = newTitle;

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }




}
