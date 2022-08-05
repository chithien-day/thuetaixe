import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-crud-nv',
  templateUrl: './crud-nv.component.html',
  styleUrls: ['./crud-nv.component.css']
})
export class CrudNvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() nv:any;
  IDNhanVien!:string;
  MaChucVu!:string;
  IDTaiKhoan!:string;
  HoTen!:string;
  DienThoai!:string;
  DiaChi!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  ListChucVu: any = [];

  ngOnInit(): void {
    this.loadListChucVu();
  }

  loadListChucVu(){
    this.service.getTenChucVu().subscribe((data:any) => {
      this.ListChucVu = data;

      this.IDNhanVien = this.nv.IDNhanVien;
      this.MaChucVu = this.nv.MaChucVu;
      this.IDTaiKhoan = this.nv.IDTaiKhoan;
      this.HoTen = this.nv.HoTen;
      this.DienThoai =  this.nv.DienThoai;
      this.DiaChi = this.nv.DiaChi;
    });
  }

  createNhanVien(){
    var val = {IDNhanVien:this.IDNhanVien,
                MaChucVu:this.MaChucVu,
                IDTaiKhoan:this.IDTaiKhoan,
                HoTen:this.HoTen,
                DienThoai:this.DienThoai,
                DiaChi:this.DiaChi};
    this.service.createNhanVien(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateNhanVien(){
    var val = {IDNhanVien:this.IDNhanVien,
                MaChucVu:this.MaChucVu,
                IDTaiKhoan:this.IDTaiKhoan,
                HoTen:this.HoTen,
                DienThoai:this.DienThoai,
                DiaChi:this.DiaChi};
      this.service.updateNhanVien(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
