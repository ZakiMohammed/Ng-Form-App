import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: User;
  loader: boolean = false;
  message: string = '';

  constructor(private userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(frm: NgForm) {       
    if (frm.form.valid) {

      this.loader = true;
      this.message = '';

      this.userService.post(this.user).then(response => {
        this.message = 'Record inserted successfully';
        frm.resetForm();        
      }).catch(reason => {
        this.message = 'Something went wrong; <br>Reason: ' + reason.message;
      }).finally(() => {
        
        this.loader = false;
        setTimeout(() => this.message = '', 3000);
      });
      
    }
  }

}
