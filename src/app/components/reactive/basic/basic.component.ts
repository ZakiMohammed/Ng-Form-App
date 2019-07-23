import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  frm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.frm = new FormGroup({
      name: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    });
  }

  onSubmit() {
    if (!(this.frm.value.name && 
      this.frm.value.userName &&
      this.frm.value.email &&
      this.frm.value.phone &&
      this.frm.value.website)) {
      return;
    }

    let user = new User();

    // user.name = this.frm.value.name;
    // user.userName = this.frm.value.userName;
    // user.email = this.frm.value.email;
    // user.phone = this.frm.value.phone;
    // user.website = this.frm.value.website;

    user = {...this.frm.value};
    
    this.userService.post(user).then(respone => {
      console.log(respone);
    });
  }

}
