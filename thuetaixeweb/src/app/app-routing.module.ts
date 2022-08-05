import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChucvuComponent } from './chucvu/chucvu.component';
import { DatchuyenComponent } from './datchuyen/datchuyen.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'admin/chucvu', component:ChucvuComponent},
  {path: 'admin/datchuyen', component:DatchuyenComponent},
  {path: 'admin/khachhang', component:KhachhangComponent},
  {path: 'admin/nhanvien', component:NhanvienComponent},
  {path: 'admin/taikhoan', component:TaikhoanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
