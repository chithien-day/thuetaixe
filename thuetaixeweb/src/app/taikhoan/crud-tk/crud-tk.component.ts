import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-crud-tk',
  templateUrl: './crud-tk.component.html',
  styleUrls: ['./crud-tk.component.css']
})
export class CrudTkComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() tk:any;
  IDTaiKhoan!:string;
  TenTaiKhoan!:string;
  MatKhau!:string;
  TrangThai!:string;

  ngOnInit(): void {
    this.IDTaiKhoan = this.tk.IDTaiKhoan;
    this.TenTaiKhoan = this.tk.TenTaiKhoan;
    this.MatKhau = this.tk.MatKhau;
    this.TrangThai =  this.tk.TrangThai;
  }

  createTaiKhoan(){
    var val = {IDTaiKhoan:this.IDTaiKhoan,
                TenTaiKhoan:this.TenTaiKhoan,
                MatKhau:this.MatKhau,
                TrangThai:this.TrangThai};
    this.service.createTaiKhoan(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTaiKhoan(){
    var val = {IDTaiKhoan:this.IDTaiKhoan,
      TenTaiKhoan:this.TenTaiKhoan,
      MatKhau:this.MatKhau,
      TrangThai:this.TrangThai};
this.service.updateTaiKhoan(val).subscribe(res=>{
alert(res.toString());
});
  }
}
