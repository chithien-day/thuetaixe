using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiDA_2.Models
{
    public class KhachHang
    {
        public int IDKhachHang { get; set; }
        public int IDTaiKhoan { get; set; }
        public string HoTen { get; set; }
        public string DienThoai { get; set; }
        public string DiaChi { get; set; }
    }
}