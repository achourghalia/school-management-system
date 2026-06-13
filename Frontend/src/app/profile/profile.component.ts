import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profile } from '../profile';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  formValue!: FormGroup;
  obj: Profile = new Profile;
  alluserdata: any;
  image = "assets/profile.jpg";
  showadd!: boolean;
  showupdate!: boolean;
  add() {
    this.showadd = true;
    this.showupdate = false;
  }
  //  data:any;
  edit(data: any) {

    this.showadd = false;
    this.showupdate = true;

    if (data.id == 1) {
      this.formValue.controls['student'].setValue(data.student);
      this.formValue.controls['parent'].setValue(data.parent);
      this.formValue.controls['dateNaissance'].setValue(data.dateNaissance);
      this.formValue.controls['email'].setValue(data.email);
      this.formValue.controls['password'].setValue(data.password);
      this.formValue.controls['phone'].setValue(data.phone);
      this.formValue.controls['gender'].setValue(data.gender);
      // this.obj.nom=data.nom;
    }

  }



  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder, private api: AuthService) {

  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: this.formBuilder.control(''),
      student: this.formBuilder.control('', Validators.required),
      parent: this.formBuilder.control('', Validators.required),
      dateNaissance: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.formBuilder.control('', Validators.compose([Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([Validators.required])),
      gender: this.formBuilder.control('male'),
    });
    this.getProfile();
  }



  /**** Crud *****/
  addProfile() {
    if (this.formValue.valid) {
      this.obj.student = this.formValue.value.student;
      this.obj.parent = this.formValue.value.parent;
      this.obj.dateNaissance = this.formValue.value.dateNaissance;
      this.obj.phone = this.formValue.value.phone;
      this.obj.email = this.formValue.value.email;
      this.obj.password = this.formValue.value.password;
      this.obj.gender = this.formValue.value.gender;
      this.api.postprofile(this.obj).subscribe(res => {
        console.log(res);
        this.formValue.reset();
        this.getProfile();
        this.toastr.success('Profile add succefully');

      },
        err => {
          this.toastr.error("error when you adding profile");
        })
    } else {
      this.toastr.warning('Please Enter a Valid data');
    }
  }
  getProfile() {
    this.api.getprofile().subscribe(res => {
      this.alluserdata = res;
    })
  }
  UpdateProfile() {
    this.obj.parent = this.formValue.value.parent;
    this.obj.student = this.formValue.value.student;
    this.obj.dateNaissance = this.formValue.value.dateNaissance;
    this.obj.email = this.formValue.value.email;
    this.obj.password = this.formValue.value.password;
    this.obj.phone = this.formValue.value.phone;
    this.obj.gender = this.formValue.value.gender;
    this.api.updateuser(this.obj, this.obj.id).subscribe(res => {
      this.formValue.reset();
      this.getProfile();
      this.toastr.success('Profile Updated succefully');
    },
      err => {
        this.toastr.error('Something went worng !!!');
      }
    )
  }
  /************/
  ImageUpload(event: any) {
    const file: File = event.target.files[0];
  }

  UpdataPassword(): void {
    this.router.navigate(['./corps/change']);
  }
}