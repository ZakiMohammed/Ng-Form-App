import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  frm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private userService: UserService
  ) {}

  get phones() {
    return <FormArray>this.frm.controls.phones;
  }

  ngOnInit() {    

    this.frm = this.builder.group({
      name: '',
      phones: this.builder.array([this.buildPhone(), this.buildPhone()])
    });
  }

  buildPhone() : FormControl {
    return this.builder.control('');
  }

  onAddClick($event: any) {
    this.phones.push(this.buildPhone());
  }

  onRemoveClick($event: any, i: number) {
    this.phones.removeAt(i);
  }

  onSubmit() {
  }

}
