import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent implements OnInit {
  showadd!: boolean;
  showupdate!: boolean;
  formValue!: FormGroup;
  usermodelobj: User = new User;
  alluserdata: any;
  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private api: AuthService) {

  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nom: this.formBuilder.control('', Validators.required),
      prenom: this.formBuilder.control('', Validators.required),
      dateNaissance: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.formBuilder.control('', Validators.compose([Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([Validators.required])),
      gender: this.formBuilder.control('male'),
      role: this.formBuilder.control('admin'),
      isactive: this.formBuilder.control(false)
    });
    this.getUser();
  }
  add() {
    this.showadd = true;
    this.showupdate = false;
  }
  edit(data: any) {
    this.showadd = false;
    this.showupdate = true;
    this.usermodelobj.id = data.id;
    this.formValue.controls['parentname'].setValue(data.parentname);
    this.formValue.controls['studentname'].setValue(data.studentname);
    this.formValue.controls['dateNaissance'].setValue(data.dateNaissance);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['password'].setValue(data.password);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['gender'].setValue(data.gender);
    this.formValue.controls['class'].setValue(data.adress);
    this.formValue.controls['adress'].setValue(data.adress);

  }
  Update() {
    this.usermodelobj.parentname = this.formValue.value.parentname;
    this.usermodelobj.studentname = this.formValue.value.studentname;
    this.usermodelobj.dateNaissance = this.formValue.value.dateNaissance;
    this.usermodelobj.email = this.formValue.value.email;
    this.usermodelobj.password = this.formValue.value.password;
    this.usermodelobj.phone = this.formValue.value.phone;
    this.usermodelobj.gender = this.formValue.value.gender;
    this.usermodelobj.class = this.formValue.value.class;
    this.usermodelobj.adress = this.formValue.value.adress;
    this.api.updateuser(this.usermodelobj, this.usermodelobj.id).subscribe((res: any) => {
      this.formValue.reset();
      this.getUser();
      this.toastr.success('Record Updated succefully');
    },
      (err: any) => {
        this.toastr.error('Something went worng !!!');
      }
    )
  }
  addUser() {
    if (this.formValue.valid) {


      this.usermodelobj.parentname = this.formValue.value.parentnamme;
      this.usermodelobj.studentname = this.formValue.value.studentname;
      this.usermodelobj.dateNaissance = this.formValue.value.dateNaissance;
      this.usermodelobj.email = this.formValue.value.email;
      this.usermodelobj.password = this.formValue.value.password;
      this.usermodelobj.phone = this.formValue.value.phone;
      this.usermodelobj.gender = this.formValue.value.gender;
      this.usermodelobj.class = this.formValue.value.class;
      this.usermodelobj.adress = this.formValue.value.adress;
      this.api.postuser(this.usermodelobj).subscribe((res: any) => {

        console.log(res);
        this.formValue.reset();
        this.getUser();
        this.toastr.success('Record added sucessfully');
      },
        (err: any) => {
          this.toastr.error('Something went wrong !!!');
        }
      )
    } else {
      this.toastr.warning('Please Enter a Valid data');
    }
  }

  getUser() {
    this.api.getuser().subscribe((res: any) => {
      this.alluserdata = res;
    })
  }
  deleteUser(data: any) {
    if (confirm('Are you sure to delete?'))
      this.api.deleteuser(data.id).subscribe((res: any) => {
        this.toastr.success('Record deleted sucessfully');
        this.getUser();
      },
        (erro: any) => {
          this.toastr.error('Something went wrong !!!');
        }
      )
  }
  printThisPage() {
    window.print();
  }
}