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
    public class ChucVuController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                            select MaChucVu, TenChucVu, MoTa from
                            dbo.ChucVu
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

        public string Post(ChucVu cv)
        {
            try
            {
                string query = @"
                                insert into dbo.ChucVu values
                                (
                                '" + cv.TenChucVu + @"',
                                '" + cv.Mota + @"'
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

        public string Put(ChucVu cv)
        {
            try
            {
                string query = @"
                                update dbo.ChucVu set
                                TenChucVu = '" + cv.TenChucVu + @"',
                                MoTa = '" + cv.Mota + @"'
                                where MaChucVu = " + cv.MaChucVu + @"
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
                                Delete from dbo.ChucVu 
                                where MaChucVu = " + id + @"
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
