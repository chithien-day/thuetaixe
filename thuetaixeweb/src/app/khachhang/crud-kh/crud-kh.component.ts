import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-crud-kh',
  templateUrl: './crud-kh.component.html',
  styleUrls: ['./crud-kh.component.css']
})
export class CrudKhComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() kh:any;
  IDKhachHang!:string;
  HoTen!:string;
  DienThoai!:string;
  DiaChi!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  ngOnInit(): void {
    this.IDKhachHang= this.kh.IDKhachHang;
    this.HoTen = this.kh.HoTen;
    this.DienThoai =  this.kh.DienThoai;
    this.DiaChi = this.kh.DiaChi;
  }

  createKhachHang(){
    var val = {IDKhachHang:this.IDKhachHang,
                HoTen:this.HoTen,
                DienThoai:this.DienThoai,
                DiaChi:this.DiaChi};
    this.service.createKhachHang(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateKhachHang(){
    var val = {IDKhachHang:this.IDKhachHang,
                HoTen:this.HoTen,
                DienThoai:this.DienThoai,
                DiaChi:this.DiaChi};
      this.service.updateKhachHang(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
