import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  frm: FormGroup;
  files: any[] = [];

  constructor(
    private builder: FormBuilder,
    private userService: UserService) {}

  ngOnInit() {
    this.frm = this.builder.group({
      picture: ['', Validators.required],
      pictureFile: ''
    });    
  }

  onSubmit() {
    if (!(this.frm.value.picture)) {
      return;
    }

    const formData = new FormData();
    formData.append('Upload', this.frm.get('pictureFile').value);

    this.userService.upload(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onFileSelect(event: any) {

    let allowedExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.bmp'];
    console.log('🏀', event.target.files);
  }

}
