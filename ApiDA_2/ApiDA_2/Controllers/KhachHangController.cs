using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using ApiDA_2.Models;

namespace ApiDA_2.Controllers
{
    public class KhachHangController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                            select IDKhachHang, IDTaiKhoan, HoTen, DienThoai, DiaChi from
                            dbo.KhachHang
                            ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(KhachHang kh)
        {
            try
            {
                string query = @"
                                insert into dbo.KhachHang values
                                (
                                '" + kh.IDTaiKhoan + @"',
                                '" + kh.HoTen + @"',
                                '" + kh.DienThoai + @"',
                                '" + kh.DiaChi + @"'
                                )";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Thêm thành công!!!";
            }
            catch (Exception e)
            {
                return e.ToString();
                return "Thêm không thành công!!!";
            }
        }

        public string Put(KhachHang kh)
        {
            try
            {
                string query = @"
                                update dbo.KhachHang set
                                IDTaiKhoan = '" + kh.IDTaiKhoan + @"',
                                HoTen = '" + kh.HoTen + @"',
                                DienThoai = '" + kh.DienThoai + @"',
                                DiaChi = '" + kh.DiaChi + @"'
                                where IDKhachHang = " + kh.IDKhachHang + @"
                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Sửa thành công!!!";
            }
            catch (Exception)
            {
                return "Sửa không thành công!!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                                Delete from dbo.KhachHang 
                                where IDKhachHang = " + id + @"
                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Xóa thành công!!!";
            }
            catch (Exception)
            {
                return "Xóa không thành công!!!";
            }
        }
    }
}
