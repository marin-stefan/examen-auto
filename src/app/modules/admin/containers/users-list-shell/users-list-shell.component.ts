import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/modules/shared/interfaces/user-model';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.css']
})
export class UsersListShellComponent implements OnInit {
  public searchResultsCount: number = 0;
  public loading: boolean = false;
  public searching: boolean = false;

  public userSearchForm: FormGroup;
  public dataSource = new MatTableDataSource<UserModel>;
  public displayedColumns: string[] = [ 'FirstName', 'LastName', 'Email', 'Actions'];

  constructor(
    private adminService: AdminService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.userSearchForm = new FormGroup({
      lastName : new FormControl('',)
    });
    this.getUsers(); 
  }

  //getters
  get lastName() { return this.userSearchForm.get('lastName') };

  clearAll(): void {
    this.userSearchForm.reset();
    this.getUsers();
  }

  onSubmit(): void {
    let query = {}
    if(this.userSearchForm.value.lastName) query['lastName'] = this.userSearchForm.value.lastName

    this.adminService.getAllUsers(query).subscribe({
      next: (response) => {
        this.searchResultsCount = (response.users).length
        this.dataSource = response.users;
        this.loading = false;
      },
      error: (error) => this.notificationService.errorNotification(error)
    })
  }

  getUsers(): void {
    this.loading = true;
    let query = {}
    if(this.userSearchForm.value.lastName) query['firstName'] = this.userSearchForm.value.lastName

    this.adminService.getAllUsers(query).subscribe({
      next: (response) => {
        this.searchResultsCount = (response.users).length
        this.dataSource = response.users;
        this.loading = false;
      },
      error: (error) => this.notificationService.errorNotification(error)
    })

  }

}
