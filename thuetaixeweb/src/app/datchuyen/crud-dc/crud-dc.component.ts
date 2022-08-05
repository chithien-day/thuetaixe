import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-crud-dc',
  templateUrl: './crud-dc.component.html',
  styleUrls: ['./crud-dc.component.css']
})
export class CrudDcComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dc:any;
  IDChuyen!:string;
  IDTaiKhoan!:string;
  IDKhachHang!:string;
  DiemDon!:string;
  ThoiGianDon!:string;
  DiemKetThuc!:string;
  ThoiGianKetThuc!:string;
  GiaTien!:string;
  TrangThai!:string;

  ListIDTK: any = [];
  ListIDKH: any = [];

  ngOnInit(): void {
    this.loadListIDTK();
    this.loadListIDKH();
  }

  loadListIDTK(){
    this.service.getTaiKhoanList().subscribe((data:any)=>{
      this.ListIDTK = data;

      this.IDChuyen = this.dc.IDChuyen;
      this.IDTaiKhoan = this.dc.IDTaiKhoan;
      this.IDKhachHang = this.dc.IDKhachHang;
      this.DiemDon = this.dc.DiemDon;
      this.ThoiGianDon = this.dc.ThoiGianDon;
      this.DiemKetThuc =  this.dc.DiemKetThuc;
      this.ThoiGianKetThuc = this.dc.ThoiGianKetThuc;
      this.GiaTien = this.dc.GiaTien;
      this.TrangThai = this.dc.TrangThai;
    });
  }

  loadListIDKH(){
    this.service.getKhachHangList().subscribe((data:any)=>{
      this.ListIDKH = data;

      this.IDChuyen = this.dc.IDChuyen;
      this.IDTaiKhoan = this.dc.IDTaiKhoan;
      this.IDKhachHang = this.dc.IDKhachHang;
      this.DiemDon = this.dc.DiemDon;
      this.ThoiGianDon = this.dc.ThoiGianDon;
      this.DiemKetThuc =  this.dc.DiemKetThuc;
      this.ThoiGianKetThuc = this.dc.ThoiGianKetThuc;
      this.GiaTien = this.dc.GiaTien;
      this.TrangThai = this.dc.TrangThai;
    });
  }


  createDatChuyen(){
    var val = {IDTaiKhoan:this.IDTaiKhoan,
                IDKhachHang:this.IDKhachHang,
                DiemDon:this.DiemDon,
                ThoiGianDon:this.ThoiGianDon,
                DiemKetThuc:this.DiemKetThuc,
                ThoiGianKetThuc:this.ThoiGianKetThuc,
                GiaTien:this.GiaTien,
                TrangThai:this.TrangThai};
    this.service.createDatChuyen(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDatChuyen(){
    var val = {IDChuyen:this.IDChuyen,
                IDTaiKhoan:this.IDTaiKhoan,
                IDKhachHang:this.IDKhachHang,
                DiemDon:this.DiemDon,
                ThoiGianDon:this.ThoiGianDon,
                DiemKetThuc:this.DiemKetThuc,
                ThoiGianKetThuc:this.ThoiGianKetThuc,
                GiaTien:this.GiaTien,
                TrangThai:this.TrangThai};
    this.service.updateDatChuyen(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
