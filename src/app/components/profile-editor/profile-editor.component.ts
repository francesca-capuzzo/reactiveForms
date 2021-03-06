import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({

    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(8)]),
    password: new FormControl('', Validators.required),

    details: new FormGroup({

      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+[0-9]*$"), Validators.minLength(10)]),
    })
  })


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  logIn(){
    const controls = this.profileForm.controls;
    console.log('Username: ' + controls['username'].value);
    console.log('Password: ' + controls['password'].value);
    console.log('Name: ' + controls['firstName'].value);
    console.log('Surname: ' + controls['lastName'].value);
    // console.log('Gender: ' + controls['gender'].value);
    console.log('Address: ' + controls['address'].value);
    console.log('Phone Number: ' + controls['phone'].value);
    
  }

  // updateProfile(){
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   })
  // }

}


