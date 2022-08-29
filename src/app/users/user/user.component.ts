import { Component, Input, OnInit } from '@angular/core';
import { User } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() public user: User = {name:'sfd', email: 'sf', address: {street:'df', city:'saf'}};

  constructor() {

  }

  ngOnInit(): void {
  }

}
