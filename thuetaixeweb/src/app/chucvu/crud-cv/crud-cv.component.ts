import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-crud-cv',
  templateUrl: './crud-cv.component.html',
  styleUrls: ['./crud-cv.component.css']
})
export class CrudCvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cv:any;
  MaChucVu!:string;
  TenChucVu!:string;
  MoTa!:string;

  ngOnInit(): void {
    this.MaChucVu = this.cv.MaChucVu;
    this.TenChucVu = this.cv.TenChucVu;
    this.MoTa = this.cv.MoTa;
  }

  createChucVu(){
    var val = {MaChucVu:this.MaChucVu,
                TenChucVu:this.TenChucVu,
                MoTa:this.MoTa};
    this.service.createChucVu(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateChucVu(){
    var val = {MaChucVu:this.MaChucVu,
                TenChucVu:this.TenChucVu,
                MoTa:this.MoTa};
    this.service.updateChucVu(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
