import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChucvuComponent } from './chucvu/chucvu.component';
import { CrudCvComponent } from './chucvu/crud-cv/crud-cv.component';
import { ShowCvComponent } from './chucvu/show-cv/show-cv.component';

import { DatchuyenComponent } from './datchuyen/datchuyen.component';
import { CrudDcComponent } from './datchuyen/crud-dc/crud-dc.component';
import { ShowDcComponent } from './datchuyen/show-dc/show-dc.component';

import { KhachhangComponent } from './khachhang/khachhang.component';
import { CrudKhComponent } from './khachhang/crud-kh/crud-kh.component';
import { ShowKhComponent } from './khachhang/show-kh/show-kh.component';

import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { CrudNvComponent } from './nhanvien/crud-nv/crud-nv.component';
import { ShowNvComponent } from './nhanvien/show-nv/show-nv.component';

import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { CrudTkComponent } from './taikhoan/crud-tk/crud-tk.component';
import { ShowTkComponent } from './taikhoan/show-tk/show-tk.component';

import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,

    ChucvuComponent,
    CrudCvComponent,
    ShowCvComponent,

    DatchuyenComponent,
    CrudDcComponent,
    ShowDcComponent,

    KhachhangComponent,
    CrudKhComponent,
    ShowKhComponent,

    NhanvienComponent,
    CrudNvComponent,
    ShowNvComponent,

    TaikhoanComponent,
    CrudTkComponent,
    ShowTkComponent,
    LoginComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
