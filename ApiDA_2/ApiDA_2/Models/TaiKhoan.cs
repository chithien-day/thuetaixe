using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiDA_2.Models
{
    public class TaiKhoan
    {
        public int IDTaiKhoan { get; set; }
        public string TenTaiKhoan { get; set; }
        public string MatKhau { get; set; }
        public string TrangThai { get; set; }
    }
}