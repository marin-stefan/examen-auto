import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs'
import { FormGroup } from '@angular/forms';
import { AddEditUserFormComponent } from '../../components/add-edit-user-form/add-edit-user-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { HttpService } from '../../services/http.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {
  public loading: boolean = false;
  public formGroup: FormGroup;
  private userId: string;

  @ViewChild(AddEditUserFormComponent) userForm: AddEditUserFormComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private notificationService: NotificationService,
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(take(1))
      .subscribe(param => {
        this.userId = param['userId'];
        this.populateUserForm()
      } )
  }

  onSubmit(): void {

  }

  onCancel(): void {
    this.router.navigate(['admin/users'])
  }

  private populateUserForm(): void {
    this.sharedService.getUser(this.userId)
    .pipe(take(1))
    .subscribe((user) => {
      this.userForm.editUserFormGroup.patchValue(user)

    })
  }



}
