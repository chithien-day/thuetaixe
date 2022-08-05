import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-tk',
  templateUrl: './show-tk.component.html',
  styleUrls: ['./show-tk.component.css']
})
export class ShowTkComponent implements OnInit {

  constructor(private service: SharedService) { }
  // Danh sách khách hàng
  listTaiKhoan: any = [];

  ModalTitle!: String;
  ActiveCrudTkComp:boolean = false;
  tk:any;

  // Lọc + xếp
  FilterIDTaiKhoan:string = "";
  FilterTenDangNhap: string = "";
  FilterTrangThai: string = "";
  listTaiKhoanWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshTKList();
  }

  addClick(){
    this.tk={
      IDTaiKhoan:0,
      TenTaiKhoan:"",
      MatKhau:"",
      TrangThai:"",
    }
    this.ModalTitle = "Thêm tài khoản";
    this.ActiveCrudTkComp = true;
  }

  closeClick(){
    this.ActiveCrudTkComp = false
    this.refreshTKList();
  }

  deleteClick(item:any){;
    if (confirm('Bạn chắc chắn muốn xóa?')){
      this.service.deleteTaiKhoan(item.IDTaiKhoan).subscribe(data=>{
        alert(data.toString());
        this.refreshTKList();
      })
    }
  }

  editClick(item:any){
    this.tk = item;
    this.ModalTitle = "Chỉnh sửa thông tin tài khoản"
    this.ActiveCrudTkComp = true;
  }

  refreshTKList(){
    this.service.getTaiKhoanList().subscribe(data => {
      this.listTaiKhoan = data;
      this.listTaiKhoanWithoutFilter = data;
    });
  }

  FilterFn(){
    var FilterIDTaiKhoan= this.FilterIDTaiKhoan;
    var FilterTenDangNhap = this.FilterTenDangNhap;
    var FilterTrangThai = this.FilterTrangThai;

    this.listTaiKhoan = this.listTaiKhoanWithoutFilter.filter(function (el:any){
    return el.IDTaiKhoan.toString().toLowerCase().includes(
      FilterIDTaiKhoan.toString().trim().toLowerCase()
    )&&
    el.TenTaiKhoan.toString().toLowerCase().includes(
      FilterTenDangNhap.toString().trim().toLowerCase()
    )&&
      el.TrangThai.toString().toLowerCase().includes(
      FilterTrangThai.toString().trim().toLowerCase()
    )
    });
  }

  sortResult(prop:any,asc:any){
    this.listTaiKhoan= this.listTaiKhoanWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
