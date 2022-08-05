import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cv',
  templateUrl: './show-cv.component.html',
  styleUrls: ['./show-cv.component.css']
})
export class ShowCvComponent implements OnInit {

  constructor(private service:SharedService) { }

  ListChucVu: any = [];

  ModalTitle!:string;
  ActiveCrudCvComp: boolean = false;
  cv:any;

  FilterMaChucVu:string = "";
  FilterTenChucVu:string = "";
  FilterMoTa: string = "";
  ListChucVuWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshCVList();
  }

  addClick(){
    this.cv={
      MaChucVu:0,
      TenChucVu:"",
      MoTa:"",
    }

    this.ModalTitle = "Thêm chức vụ mới";
    this.ActiveCrudCvComp = true;
  }

  closeClick(){
    this.ActiveCrudCvComp = false;
    this.refreshCVList();
  }

  editClick(item:any){
    this.cv = item;
    this.ModalTitle = "Chỉnh sửa thông tin chức vụ";
    this.ActiveCrudCvComp = true;
  }

  deleteClick(item:any){
    if (confirm('Bạn chắc chắn muốn xóa?')){
      this.service.deleteChucVu(item.MaChucVu).subscribe(data=>{
        alert(data.toString());
        this.refreshCVList();
      })
    }
  }

  refreshCVList(){
    this.service.getChucVuList().subscribe(data => {
      this.ListChucVu = data;
      this.ListChucVuWithoutFilter = data;
    });
  }

  FilterFn(){
    var FilterMaChucVu = this.FilterMaChucVu;
    var FilterTenChucVu = this.FilterTenChucVu;
    var FilterMoTa = this.FilterMoTa;

    this.ListChucVu = this.ListChucVuWithoutFilter.filter(function (el:any){
      return el.MaChucVu.toString().toLowerCase().includes(
        FilterMaChucVu.toString().trim().toLowerCase()
      )&&
      el.TenChucVu.toString().toLowerCase().includes(
        FilterTenChucVu.toString().trim().toLowerCase()
      )&&
      el.MoTa.toString().toLowerCase().includes(
        FilterMoTa.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any,asc:any){
    this.ListChucVu = this.ListChucVuWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
