import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-parent-portal',
  templateUrl: './parent-portal.component.html',
  styleUrl: './parent-portal.component.css'
})
export class ParentPortalComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router, private toastr: ToastrService) {
    sessionStorage.clear();
  }
  visible: boolean = true;
  changetype: boolean = true;
  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  loginform = this.builder.group({
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.required)
  });

  login() {

    if (this.loginform.valid) {
      this.service.GetbyCode(this.loginform.value).subscribe((res: any) => {
        const user = res.find((a: any) => {
          // if (!a.isactive) {
          //   this.toastr.error('user not active');
          //   return false;
          // }
          return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
        });
        if (user) {
          this.toastr.success('Login Successfully');
          this.loginform.reset();
          this.router.navigate(['Welcome']);
        } else {
          this.toastr.error('user not found');
        }
      })
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }

}
