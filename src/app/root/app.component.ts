import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Teacher Journal';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.studentData();
  }

  studentData() {
    this.dataService.getStudentData().subscribe(
      (data) => {
        console.log(data, "SUCCESS")
      },
      (error) => {
        console.log("ERROR", error)
      }
    );
  }
  
}
