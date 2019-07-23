import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  frm: FormGroup;

  get f() { return this.frm.controls; }

  constructor(
    private builder: FormBuilder,
    private userService: UserService) {}

  ngOnInit() {
    this.frm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      website: ['', [Validators.required, Validators.minLength(3), Validators.pattern('https?://.+')]]
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
