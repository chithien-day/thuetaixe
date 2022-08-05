import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-nv',
  templateUrl: './show-nv.component.html',
  styleUrls: ['./show-nv.component.css']
})
export class ShowNvComponent implements OnInit {

  constructor(private service: SharedService) { }

  // Danh sách nhân viên
  listNhanVien: any = [];

  ModalTitle!: String;
  ActiveCrudNvComp:boolean = false;
  nv:any;

  // Lọc + xếp
  FilterIDNhanVien: string = "";
  FilterMaChucVu: string = "";
  FilterIDTaiKhoan: string = "";
  FilterHoTen: string = "";
  FilterDiaChi: string = "";
  FilterDienThoai: string = "";
  ListNhanVienWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshNVList();
  }

  addClick(){
    this.nv={
      IDNhanVien:0,
      MaChucVu:"",
      IDTaiKhoan:"",
      HoTen:"",
      DienThoai:"",
      DiaChi:"",
    }
    this.ModalTitle = "Thêm nhân viên";
    this.ActiveCrudNvComp = true;
  }

  closeClick(){
    this.ActiveCrudNvComp = false
    this.refreshNVList();
  }

  deleteClick(item:any){;
    if (confirm('Bạn chắc chắn muốn xóa?')){
      this.service.deleteNhanVien(item.IDNhanVien).subscribe(data=>{
        alert(data.toString());
        this.refreshNVList();
      })
    }
  }

  editClick(item:any){
    this.nv = item;
    this.ModalTitle = "Chỉnh sửa thông tin nhân viên"
    this.ActiveCrudNvComp = true;
  }

  refreshNVList(){
    this.service.getNhanVienList().subscribe(data => {
      this.listNhanVien = data;
      this.ListNhanVienWithoutFilter = data;
    });
  }

  FilterFn(){
    var FilterIDNhanVien = this.FilterIDNhanVien;
    var FilterMaChucVu = this.FilterMaChucVu;
    var FilterIDTaiKhoan = this.FilterIDTaiKhoan;
    var FilterHoTen = this.FilterHoTen;
    var FilterDienThoai = this.FilterDienThoai;
    var FilterDiaChi = this.FilterDiaChi;

    this.listNhanVien = this.ListNhanVienWithoutFilter.filter(function (el:any){
    return el.IDNhanVien.toString().toLowerCase().includes(
      FilterIDNhanVien.toString().trim().toLowerCase()
    )&&
    el.MaChucVu.toString().toLowerCase().includes(
      FilterMaChucVu.toString().trim().toLowerCase()
    )&&
    el.IDTaiKhoan.toString().toLowerCase().includes(
      FilterIDTaiKhoan.toString().trim().toLowerCase()
    )&&
    el.HoTen.toString().toLowerCase().includes(
      FilterHoTen.toString().trim().toLowerCase()
    )&&
    el.DienThoai.toString().toLowerCase().includes(
      FilterDienThoai.toString().trim().toLowerCase()
    )&&
    el.DiaChi.toString().toLowerCase().includes(
      FilterDiaChi.toString().trim().toLowerCase()
    )
    });
  }

  sortResult(prop:any,asc:any){
    this.listNhanVien = this.ListNhanVienWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
