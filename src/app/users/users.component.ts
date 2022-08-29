import { Component, OnInit } from '@angular/core';
import { User, UserService } from './service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UserService) {
   }

  ngOnInit(): void {
    this.service.getUsers().subscribe(resposne => this.users = resposne);
  }

}
