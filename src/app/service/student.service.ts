import { Injectable } from '@angular/core';

export interface Student{
  name: string,
  surname: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Student[]{
    return [{name:"anatol", surname:'nowak', age:14}, {name: 'mirek', surname:'kijek', age:16}, {name:'fryderyk', surname:'shopin', age:90}];
  }
}
