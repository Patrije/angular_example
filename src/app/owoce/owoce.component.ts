import { Component, OnInit } from '@angular/core';
import { OwoceService } from '../owoce-service/owoce.service';

@Component({
  selector: 'app-owoce',
  templateUrl: './owoce.component.html',
  styleUrls: ['./owoce.component.css']
})
export class OwoceComponent implements OnInit {

  owoce: string[];

  constructor(private owoceService:OwoceService) {
    this.owoce = this.owoceService.getOwoce();
   }

  ngOnInit(): void {
  }

}
