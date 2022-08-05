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
    public class TaiKhoanController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                            select IDTaiKhoan, TenTaiKhoan, MatKhau, TrangThai from
                            dbo.TaiKhoan
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

        public string Post(TaiKhoan tk)
        {
            try
            {
                string query = @"
                                insert into dbo.TaiKhoan values
                                (
                                '" + tk.TenTaiKhoan + @"',
                                '" + tk.MatKhau + @"',
                                '" + tk.TrangThai + @"'
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

        public string Put(TaiKhoan tk)
        {
            try
            {
                string query = @"
                                update dbo.TaiKhoan set
                                TenTaiKhoan = '" + tk.TenTaiKhoan + @"',
                                MatKhau = '" + tk.MatKhau + @"',
                                TrangThai = '" + tk.TrangThai + @"'
                                where IDTaiKhoan = " + tk.IDTaiKhoan + @"
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
                                Delete from dbo.TaiKhoan 
                                where IDTaiKhoan = " + id + @"
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
