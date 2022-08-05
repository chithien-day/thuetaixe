using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiDA_2.Models
{
    public class DatChuyen
    {
        public int IDChuyen { get; set; }
        public int IDTaiKhoan { get; set; }
        public int IDKhachHang { get; set; }
        public string DiemDon { get; set; }
        public string ThoiGianDon { get; set; }
        public string DiemKetThuc { get; set; }
        public string ThoiGianKetThuc { get; set; }
        public string GiaTien { get; set; }
        public string TrangThai { get; set; }
    }
}