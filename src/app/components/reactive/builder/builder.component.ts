import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  frm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private userService: UserService) {}

  ngOnInit() {
    this.frm = this.builder.group({
      name: '',
      userName: '',
      email: '',
      phone: '',
      website: ''
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
    user = {...this.frm.value};
    
    this.userService.post(user).then(respone => {
      console.log(respone);
    });
  }

}
