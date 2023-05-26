import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-user-form',
  templateUrl: './add-edit-user-form.component.html',
  styleUrls: ['./add-edit-user-form.component.css']
})
export class AddEditUserFormComponent implements OnInit {
  public editUserFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.editUserFormGroup = new FormGroup({
      firstName: new FormControl(
        '',
        [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(15)
        ]
      ),
      lastName: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ]
      ),
    })
  }

  public errorHandler(controlName: string, errorName: string): boolean {
    let control: AbstractControl = this.editUserFormGroup.controls[controlName];
    if (control.touched) {
      return control.hasError(errorName);
    }

    return false;
  }

}
