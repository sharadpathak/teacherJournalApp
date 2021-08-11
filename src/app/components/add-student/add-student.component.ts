import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  countryList = [{ id: 'UP', name: 'UP' }, { id: 'MP', name: 'MP' }];
  addStudentForm: FormGroup;

  ngOnInit(): void {
    this.formInit()
  }


  formInit() {
    this.addStudentForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      gender: new FormControl('', [Validators.required, Validators.minLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required, Validators.minLength(3)]),
        city: new FormControl('', [Validators.required, Validators.minLength(3)]),
        pincode: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    });
  }


  constructor(private fb: FormBuilder) { }

  addStudentFun(addStudentForm: FormGroup) {
    console.log('Valid?', addStudentForm.controls.address); // true or false
    // Submit the Form after validation
  }

}
