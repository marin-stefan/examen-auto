import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-user-form',
  templateUrl: './add-edit-user-form.component.html',
  styleUrls: ['./add-edit-user-form.component.css']
})
export class AddEditUserFormComponent implements OnInit {
  public editUserFormGroup: FormGroup;
  public passwordBtn: boolean = false; 
  public disabled: boolean = false;
  public passwordField: boolean;
  public inputValue: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

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
      username: new FormControl(
        '',
        [
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.required,
        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      )
    });

    this.activatedRoute.params
      .pipe(take(1))
      .subscribe(param => {
        if(param['userId']) {
          this.passwordBtn = true;
          this.hidePasswordField()
        }
      } )
  };

  hidePasswordField(): void {
    this.disabled = !this.disabled
    if (!this.disabled) {
      const passwordControl = this.editUserFormGroup.get('password');
      passwordControl.setValue('');
    }
  };

  public errorHandler(controlName: string, errorName: string): boolean {
    let control: AbstractControl = this.editUserFormGroup.controls[controlName];
    if (control.touched) {
      return control.hasError(errorName);
    }

    return false;
  };

}
