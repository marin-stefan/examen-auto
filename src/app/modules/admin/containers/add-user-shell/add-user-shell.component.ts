import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AddEditUserFormComponent } from 'src/app/modules/shared/components/add-edit-user-form/add-edit-user-form.component';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent  {
  public loading: boolean = false;

  private isDisabledSaveButton: boolean = true;
  private isFormSaved: boolean = false;

  @ViewChild(AddEditUserFormComponent) userForm: AddEditUserFormComponent

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private adminService : AdminService
  ) { }

  get isFormChanged(): boolean {
    this.isDisabledSaveButton = this.userForm ? this.userForm.editUserFormGroup.invalid : this.isDisabledSaveButton

    return this.isDisabledSaveButton;
  }

  onSubmit() {
    this.userForm.editUserFormGroup.markAllAsTouched();

    if (this.userForm.editUserFormGroup.valid) {
      this.loading = true;
      const user = this.userForm.editUserFormGroup.value;
      user['roleId'] = '646b64fb3fbe5b936f890be7';
      user['totalExams'] = 0;
      user['totalPassedExams'] = 0;
      user['correctAnswers'] = 0;
      
      this.adminService.addUser(user)
        .pipe(take(1))
        .subscribe((response) => {
          this.loading = false;
          if (response.success) {
            this.isFormSaved = true;
            this.showNotification();
          };
        })
    };
  };

  private showNotification(): void {
    this.notificationService.successNotification('Utilizatorul a fost creat cu succes!')
    .then(() => { this.router.navigate(['admin/users']) })
  };

  onCancel(): void {
    this.router.navigate(['/admin/users'])
  };



}
