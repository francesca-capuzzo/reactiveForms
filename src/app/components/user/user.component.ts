import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // userForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Nancy');
  }

  // logIn(){
  //   const controls = this.userForm.controls;
  //   console.log('Username: ' + controls['username'].value);
  //   console.log('Password: ' + controls['password'].value);
    
  // }

}
