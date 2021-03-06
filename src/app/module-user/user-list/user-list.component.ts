import { Component, OnInit } from '@angular/core';
import { User } from '../../module-user/user';
import { UserService } from '../../module-user/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}