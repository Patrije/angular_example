import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../service/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  warunek = true;
  zmienna = 'napis';
  inputValue = 'wartosc inputu'
  students: Student[];
  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
   }

  ngOnInit(): void {

  }

  showValue(){
    this.zmienna = this.inputValue   }

  showDiv(){
    this.warunek = !this.warunek;
  }

}
