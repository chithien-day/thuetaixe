import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:54835/api"
  readonly PhotoUrl = "http://localhost:54835/Photos"

  constructor(private http:HttpClient) { }

  // Khu vực chức vụ
  getChucVuList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ChucVu');
  }
  createChucVu(val:any){
    return this.http.post(this.APIUrl+'/ChucVu',val);
  }
  updateChucVu(val:any){
    return this.http.put(this.APIUrl+'/ChucVu',val);
  }
  deleteChucVu(val:any){
    return this.http.delete(this.APIUrl+'/ChucVu/'+val);
  }

  // Khu vực đặt chuyến
  getDatChuyenList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Datchuyen');
  }
  createDatChuyen(val:any){
    return this.http.post(this.APIUrl+'/DatChuyen',val);
  }
  updateDatChuyen(val:any){
    return this.http.put(this.APIUrl+'/DatChuyen',val);
  }
  deleteDatChuyen(val:any){
    return this.http.delete(this.APIUrl+'/DatChuyen/'+val);
  }

  // Khu vực khách hàng
  getKhachHangList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/KhachHang');
  }
  createKhachHang(val:any){
    return this.http.post(this.APIUrl+'/KhachHang',val);
  }
  updateKhachHang(val:any){
    return this.http.put(this.APIUrl+'/KhachHang',val);
  }
  deleteKhachHang(val:any){
    return this.http.delete(this.APIUrl+'/KhachHang/'+val);
  }

  // Khu vực nhân viên
  getNhanVienList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/NhanVien');
  }
  createNhanVien(val:any){
    return this.http.post(this.APIUrl+'/NhanVien',val);
  }
  updateNhanVien(val:any){
    return this.http.put(this.APIUrl+'/NhanVien',val);
  }
  deleteNhanVien(val:any){
    return this.http.delete(this.APIUrl+'/NhanVien/'+val);
  }

  // Khu vực tài khoản
  getTaiKhoanList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/TaiKhoan');
  }
  createTaiKhoan(val:any){
    return this.http.post(this.APIUrl+'/TaiKhoan',val);
  }
  updateTaiKhoan(val:any){
    return this.http.put(this.APIUrl+'/TaiKhoan',val);
  }
  deleteTaiKhoan(val:any){
    return this.http.delete(this.APIUrl+'/TaiKhoan/'+val);
  }

  // Khu vực hình ảnh
  UploadPhoto(val:any){
    return this.http.post(this.PhotoUrl+'/NhanVien/LuuAnh',val);
  }

  // Lấy dữ liệu tên chức vụ
  getTenChucVu():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/NhanVien/laychucvu');
  }

  // Lấy ID khách hàng
  getIDKhachHang():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/DatChuyen/laykhachhang');
  }

  // Lấy ID tài khoản
  getIDTaiKhoan():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/DatChuyen/laytaikhoan');
  }
}
