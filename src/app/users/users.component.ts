import { Component, OnInit } from '@angular/core';
import { User, UserService } from './service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  numbers = [1,2,3,4];

  constructor(private service: UserService) {
   }

  ngOnInit(): void {
    this.service.getUsers().subscribe(resposne => this.users = resposne.filter(us => us.name.startsWith('C')));
  }

    sumTable(){
      return this.numbers.reduce((acc = 0, cur) => acc - cur)
    }

    add(){
      return this.numbers.forEach(number => console.log(number));
  
    }

}
