using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using ApiDA_2.Models;

namespace ApiDA_2.Controllers
{
    public class DatChuyenController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //Hiển thị dữ liệu table DatChuyen va định dạng hiển thị kiểu dữ liệu datetime từ yyyy/mm/dd =>  dd mon yyyy hh:mm:ss:mmm (113)
            string query = @"
                            select IDChuyen,
                            IDTaiKhoan,
                            IDKhachHang,
                            DiemDon,
                            convert(varchar(30),ThoiGianDon,113) as ThoiGianDon,
                            DiemKetThuc,
                            convert(varchar(30),ThoiGianKetThuc,113) as ThoiGianKetThuc,
                            GiaTien, 
                            TrangThai from
                            dbo.DatChuyen
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

        public string Post(DatChuyen dc)
        {
            try
            {
                string query = @"
                                insert into dbo.DatChuyen values
                                (
                                '" + dc.IDTaiKhoan + @"',
                                '" + dc.IDKhachHang + @"',
                                '" + dc.DiemDon + @"',
                                '" + dc.ThoiGianDon + @"',
                                '" + dc.DiemKetThuc + @"',
                                '" + dc.ThoiGianKetThuc + @"',
                                '" + dc.GiaTien + @"',
                                '" + dc.TrangThai + @"'
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
            catch (Exception)
            {
                return "Thêm không thành công!!!";
            }
        }

        public string Put(DatChuyen dc)
        {
            try
            {
                string query = @"
                                update dbo.DatChuyen set
                                IDTaiKhoan = '" + dc.IDTaiKhoan + @"',
                                IDKhachHang = '" + dc.IDKhachHang + @"',
                                DiemDon = '" + dc.DiemDon + @"',
                                ThoiGianDon = '" + dc.ThoiGianDon + @"',
                                DiemKetThuc = '" + dc.DiemKetThuc + @"',
                                ThoiGianKetThuc = '" + dc.ThoiGianKetThuc + @"',
                                GiaTien = '" + dc.GiaTien + @"',
                                TrangThai = '" + dc.TrangThai + @"'
                                where IDChuyen = " + dc.IDChuyen + @"
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
                                Delete from dbo.DatChuyen
                                where IDChuyen = " + id + @"
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

        // Lấy danh sách ID khách hàng
        [Route("api/DatChuyen/laykhachhang")]
        [HttpGet]
        public HttpResponseMessage layIDKhacHang()
        {
            string query = @"
                    select IDKhachHang from dbo.KhachHang";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        // Lấy danh sách ID tài khoản
        [Route("api/DatChuyen/laytaikhoan")]
        [HttpGet]
        public HttpResponseMessage layIDTaiKhoan()
        {
            string query = @"
                    select IDTaiKhoan from dbo.TaiKhoan";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["ThueTaiXeWebDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
