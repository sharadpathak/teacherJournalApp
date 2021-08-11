import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';


@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  studentData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.studentDataFun();
  }

  studentDataFun() {
    this.dataService.getStudentData().subscribe(
      (data) => {
        if (!this.studentData) {
          this.studentData = data;
        }
      },
      (error) => {
        console.log("ERROR", error)
      }
    );
  }

}
