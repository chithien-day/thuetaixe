import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-kh',
  templateUrl: './show-kh.component.html',
  styleUrls: ['./show-kh.component.css']
})
export class ShowKhComponent implements OnInit {

  constructor(private service: SharedService) { }
  // Danh sách khách hàng
  listKhachHang: any = [];

  ModalTitle!: String;
  ActiveCrudKhComp:boolean = false;
  kh:any;

  // Lọc + xếp
  FilterIDKhachHang:string = "";
  FilterHoTen: string = "";
  FilterDiaChi: string = "";
  FilterDienThoai: string = "";
  listKhachHangWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshKhList();
  }

  addClick(){
    this.kh={
      IDKhachHang:0,
      HoTen:"",
      DienThoai:"",
      DiaChi:"",
    }
    this.ModalTitle = "Thêm khách hàng";
    this.ActiveCrudKhComp = true;
  }

  closeClick(){
    this.ActiveCrudKhComp = false
    this.refreshKhList();
  }

  deleteClick(item:any){;
    if (confirm('Bạn chắc chắn muốn xóa?')){
      this.service.deleteKhachHang(item.IDKhachHang).subscribe(data=>{
        alert(data.toString());
        this.refreshKhList();
      })
    }
  }

  editClick(item:any){
    this.kh = item;
    this.ModalTitle = "Chỉnh sửa thông tin khách hàng"
    this.ActiveCrudKhComp = true;
  }

  refreshKhList(){
    this.service.getKhachHangList().subscribe(data => {
      this.listKhachHang = data;
      this.listKhachHangWithoutFilter = data;
    });
  }

  FilterFn(){
    var FilterIDKhachHang = this.FilterIDKhachHang;
    var FilterHoTen = this.FilterHoTen;
    var FilterDienThoai = this.FilterDienThoai;
    var FilterDiaChi = this.FilterDiaChi;

    this.listKhachHang = this.listKhachHangWithoutFilter.filter(function (el:any){
    return el.IDKhachHang.toString().toLowerCase().includes(
      FilterIDKhachHang.toString().trim().toLowerCase()
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
    this.listKhachHang = this.listKhachHangWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
