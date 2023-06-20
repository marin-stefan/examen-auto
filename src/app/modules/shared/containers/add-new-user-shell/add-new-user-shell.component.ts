import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from'rxjs';
import { Router } from '@angular/router';
import { AddEditUserFormComponent } from '../../components/add-edit-user-form/add-edit-user-form.component';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { NotificationService } from '../../services/notification.service';
import { ConfirmDialog } from '../../interfaces/confirmDialog.interface';

@Component({
  selector: 'app-add-new-user-shell',
  templateUrl: './add-new-user-shell.component.html',
  styleUrls: ['./add-new-user-shell.component.css']
})
export class AddNewUserShellComponent implements OnInit {
  public formGroup: FormGroup;
  private isDisabledSaveButton: boolean = true;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private notificationService: NotificationService
  ) { }

  @ViewChild(AddEditUserFormComponent) userForm: AddEditUserFormComponent;

  ngOnInit(): void {
  }

  get isFormChanged(): boolean {
    this.isDisabledSaveButton = this.userForm 
        ? ( this.userForm.editUserFormGroup.invalid)
        : this.isDisabledSaveButton

    return this.isDisabledSaveButton
  };

  onSubmit() {
    this.userForm.editUserFormGroup.markAllAsTouched();
    if (this.userForm.editUserFormGroup.valid) {
      const user = this.userForm.editUserFormGroup.value;
      user['roleId'] = '646b64fb3fbe5b936f890be7';
      user['totalExams'] = 0;
      user['totalPassedExams'] = 0;
      user['correctAnswers'] = 0;

      this.adminService.addUser(user)
        .pipe(take(1))
        .subscribe((response) => {
          if (response.success) {
            this.showNotification();
          };
        })
    };
  };

  private showNotification(): void {
    this.notificationService.successNotification('Utilizatorul a fost creat cu succes, te rugăm să te loghezi din nou cu credenţialele folosite!')
    .then(() => { this.router.navigate([`/login`]) })
  };

  onCancel(): void {
    this.router.navigate(['/login']);
  };

  public async canDeactivate(): Promise<boolean> {
    if (this.userForm.editUserFormGroup.dirty) {
      let confirmData: ConfirmDialog = {
        message : 'Sunteţi sigur că doriţi să renunţaţi? '
      }
      
      return await this.notificationService.confirmDialog(confirmData)
    }

    return true;
  };

}
