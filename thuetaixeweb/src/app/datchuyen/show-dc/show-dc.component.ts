import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dc',
  templateUrl: './show-dc.component.html',
  styleUrls: ['./show-dc.component.css']
})
export class ShowDcComponent implements OnInit {

  constructor(private service: SharedService) { }

  // Danh sách đặt chuyến
  listDatChuyen: any = [];

  ModalTitle!: String;
  ActiveCrudDcComp:boolean = false;
  dc:any;

  // Lọc + xếp
  FilterIDChuyen:string = "";
  FilterIDTaiKhoan:string = "";
  FilterIDKhachHang:string = "";
  FilterDiemDon: string = "";
  FilterThoiGianDon: string = "";
  FilterDiemKetThuc: string = "";
  FilterThoiGianKetThuc: string = "";
  FilterGiaTien: string = "";
  FilterTrangThai: string = "";
  ListDatChuyenWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshDCList();
  }

  addClick(){
    this.dc={
      IDChuyen:0,
      IDTaiKhoan:"",
      IDKhachHang:"",
      DiemDon:"",
      ThoiGianDon:"",
      DiemKetThuc:"",
      ThoiGianKetThuc:"",
      GiaTien:"",
      TrangThai:"",
    }
    this.ModalTitle = "Đặt chuyến";
    this.ActiveCrudDcComp = true;
  }

  closeClick(){
    this.ActiveCrudDcComp = false
    this.refreshDCList();
  }

  deleteClick(item:any){;
    if (confirm('Bạn chắc chắn muốn xóa?')){
      this.service.deleteDatChuyen(item.IDChuyen).subscribe(data=>{
        alert(data.toString());
        this.refreshDCList();
      })
    }
  }

  editClick(item:any){
    this.dc = item;
    this.ModalTitle = "Chỉnh sửa thông tin đặt chuyến"
    this.ActiveCrudDcComp = true;
  }

  refreshDCList(){
    this.service.getDatChuyenList().subscribe(data => {
      this.listDatChuyen = data;
      this.ListDatChuyenWithoutFilter = data;
    });
  }

  FilterFn(){
    var FilterIDChuyen = this.FilterIDChuyen;
    var FilterIDTaiKhoan = this.FilterIDChuyen;
    var FilterIDKhachHang = this.FilterIDChuyen;
    var FilterDiemDon = this.FilterDiemDon;
    var FilterThoiGianDon = this.FilterThoiGianDon;
    var FilterDiemKetThuc = this.FilterDiemKetThuc;
    var FilterThoiGianKetThuc = this.FilterThoiGianKetThuc;
    var FilterGiaTien = this.FilterGiaTien;
    var FilterTrangThai = this.FilterTrangThai;

    this.listDatChuyen = this.ListDatChuyenWithoutFilter.filter(function (el:any){
    return el.IDChuyen.toString().toLowerCase().includes(
      FilterIDChuyen.toString().trim().toLowerCase()
    )&&
    el.IDTaiKhoan.toString().toLowerCase().includes(
      FilterIDTaiKhoan.toString().trim().toLowerCase()
    )&&
    el.IDKhachHang.toString().toLowerCase().includes(
      FilterIDKhachHang.toString().trim().toLowerCase()
    )&&
    el.DiemDon.toString().toLowerCase().includes(
      FilterDiemDon.toString().trim().toLowerCase()
    )&&
    el.ThoiGianDon.toString().toLowerCase().includes(
      FilterThoiGianDon.toString().trim().toLowerCase()
    )&&
    el.DiemKetThuc.toString().toLowerCase().includes(
      FilterDiemKetThuc.toString().trim().toLowerCase()
    )&&
    el.ThoiGianKetThuc.toString().toLowerCase().includes(
      FilterThoiGianKetThuc.toString().trim().toLowerCase()
    )&&
    el.GiaTien.toString().toLowerCase().includes(
      FilterGiaTien.toString().trim().toLowerCase()
    )&&
    el.TrangThai.toString().toLowerCase().includes(
      FilterTrangThai.toString().trim().toLowerCase()
    )
    });
  }

  sortResult(prop:any,asc:any){
    this.listDatChuyen = this.ListDatChuyenWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
