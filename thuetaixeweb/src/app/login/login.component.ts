import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  logIn(){
    this._http.get<any>("http://localhost:54835/api/TaiKhoan").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.TenTaiKhoan === this.loginForm.value.email && a.MatKhau === this.loginForm.value.password
      })
      if(user){
        //alert("Login is Successfull");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }else{
        alert("Sai thông tin đăng nhập")
      }
    },err=>{
      alert("Đăng nhập thất bại")
    }
    )
  }
}
