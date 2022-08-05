using ApiDA_2.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ApiDA_2.Controllers
{
    public class NhanVienController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                            select IDNhanVien, MaChucVu, IDTaiKhoan, HoTen, DienThoai, DiaChi from
                            dbo.NhanVien
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

        public string Post(NhanVien nv)
        {
            try
            {
                string query = @"
                                insert into dbo.NhanVien values
                                (
                                '" + nv.MaChucVu + @"',
                                '" + nv.IDTaiKhoan + @"',
                                '" + nv.HoTen + @"',
                                '" + nv.DienThoai + @"',
                                '" + nv.DiaChi + @"'
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
            catch (Exception )
            {
                return "Thêm không thành công!!!";
            }
        }

        public string Put(NhanVien nv)
        {
            try
            {
                string query = @"
                                update dbo.NhanVien set
                                MaChucVu = '" + nv.MaChucVu + @"',
                                IDTaiKhoan = '" + nv.IDTaiKhoan + @"',
                                HoTen = '" + nv.HoTen + @"',
                                DienThoai = '" + nv.DienThoai + @"',
                                DiaChi = '" + nv.DiaChi + @"'
                                where IDNhanVien = " + nv.IDNhanVien + @"
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
                                Delete from dbo.NhanVien 
                                where IDNhanVien = " + id + @"
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

        // Lấy danh sách chức vụ
        [Route("api/NhanVien/laychucvu")]
        [HttpGet]
        public HttpResponseMessage GetAllDepartmentNames()
        {
            string query = @"
                    select MaChucVu from dbo.ChucVu";

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

        /*// Lưu file ảnh
        [Route("api/NhanVien/LuuAnh")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous.png";
            }
        }*/

    }
}
