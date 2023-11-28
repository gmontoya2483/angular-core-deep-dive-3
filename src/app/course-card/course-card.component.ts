import {Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
     // providers: [CoursesService]
})
export class CourseCardComponent implements OnInit {

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

      //@Attribute('type') private type: string  // is a performace optimization, change detection won't analyze its changes to re-render
      // the view
    }

    ngOnInit() {

      console.log(this.type);


    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }


  onTitleChanged(newTitle: string) {
      this.course.description = newTitle;

  }
}
