import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories = [
    { name: "development", id: 1 },
    { name: "3d Animation", id: 2 },
  ];

  submit(f){
    f.value
    console.log(f.value)
  }

}
