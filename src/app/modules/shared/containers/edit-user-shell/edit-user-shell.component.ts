import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs'
import { FormGroup } from '@angular/forms';
import { AddEditUserFormComponent } from '../../components/add-edit-user-form/add-edit-user-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { SharedService } from '../../services/shared.service';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { User } from 'src/app/modules/auth/interfaces/user';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {
  public loading: boolean = false;
  public formGroup: FormGroup;
  public currentLoggedUserRole: string = this.authenticationService.userValue.role;

  private userId: string;
  private isDisabledSaveButton: boolean = true;
  private isFormSaved: boolean = false;
  private cryptedUserPassword: string;

  @ViewChild(AddEditUserFormComponent) userForm: AddEditUserFormComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,
    private sharedService : SharedService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(take(1))
      .subscribe(param => {
        this.userId = param['userId'];
        this.populateUserForm()
      } )
  }

  get isFormChanged(): boolean {
    this.isDisabledSaveButton = this.userForm 
        ? ( this.userForm.editUserFormGroup.pristine)
        : this.isDisabledSaveButton

    return this.isDisabledSaveButton
  }

  onSubmit(): void {
    this.userForm.editUserFormGroup.markAllAsTouched();

    if (this.userForm.editUserFormGroup.valid && !this.userForm.editUserFormGroup.pristine) {
      this.loading = true;
      const userData = this.userForm.editUserFormGroup.value
      if (userData['password'] === this.cryptedUserPassword) {
        delete userData['password']
      }
      console.log(userData)
      
      this.sharedService.editUser(this.userId, userData)
        .pipe(take(1))
        .subscribe((response) => {
          this.loading = false;
          if (response.success) {
            this.isFormSaved = true;

            if (this.userId === sessionStorage.getItem('loggedUserId')) {
              this.showNotification("login")
            } else {
              this.showNotification("success");
            }
          }
        })
    }
  }

  private showNotification(message: string): void {

    if (message === "success") {
      this.notificationService.successNotification('Utilizatorul a fost actualizat cu succes!')
        .then(() => { 

          if (this.currentLoggedUserRole === 'admin') {
            this.router.navigate(['admin/users'])
          } 

          if (this.currentLoggedUserRole === 'consumer') {
            this.router.navigate(['consumer/statistics'])
          } 
        })
    } else if (message === "login") {
      this.notificationService.successNotification('Utilizatorul tau a fost actualizat, este necesara re-autentificare!')
        .then(() => {
          
          this.router.navigate(['/login'])
        })
    }
    

    
    
  }

  onCancel(): void {
    if (this.currentLoggedUserRole === 'admin') {
      this.router.navigate(['admin/users'])
    } 
    
    if (this.currentLoggedUserRole === 'consumer') {
      this.router.navigate(['consumer/statistics'])
    }

  }

  private populateUserForm(): void {
    this.sharedService.getUser(this.userId)
    .pipe(take(1))
    .subscribe((user) => {
      this.cryptedUserPassword = user['password'];
      this.userForm.editUserFormGroup.patchValue(user)
    })
  }

}
