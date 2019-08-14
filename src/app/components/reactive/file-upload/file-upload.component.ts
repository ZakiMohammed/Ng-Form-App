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
  allowedExtensions: any[] = ['.jpeg', '.jpg', '.png', '.gif', '.bmp'];

  constructor(
    private builder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.frm = this.builder.group({
      picture: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!(this.frm.value.picture)) {
      return;
    }

    const formData = new FormData();
    this.files.forEach((file: any, index: number) => {
      formData.append('Upload ' + (index + 1), file);
    });

    this.userService.upload(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onFileSelect(event: any) {

    let fileNames = '';

    this.files = [];

    for (const key in event.target.files) {
      const file = event.target.files[key];
      if (typeof(file) === 'object') {
        this.files.push(file); 
      }
    }
    console.log('⚾', this.files);
    this.frm.get('picture').setValue(fileNames);
  }

}
