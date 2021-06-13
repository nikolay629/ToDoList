using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AdController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from dbo.Ad
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AngularProject"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public HttpResponseMessage GetById(int id, string colum)
        {
            string query = @"
                    select * from dbo.Ad
                    Where " + colum + @" = " + id + @"
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AngularProject"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public IHttpActionResult Post(AdModel adModel)
        {
            try
            {
                string query = @"
                        Insert into dbo.Ad(CompanyId, AdTitle, AdInformation, AdType, AdCategory, ad.Approve)
                        Values("+ adModel.CompanyId + @",
                                '" + adModel.AdTitle + @"',
                                '" + adModel.AdInformation + @"',
                                '" + adModel.AdType + @"',
                                '" + adModel.AdCategory + @"',
                                '" + adModel.Approve + @"')
                        ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["AngularProject"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return Ok();
            }
            catch (Exception)
            {
                return Ok();
            }

        }

        public IHttpActionResult Put(AdModel adModel)
        {
            try
            {
                string query = @"
                        Update dbo.Ad
                        Set 
                        CompanyId = " + adModel.CompanyId + @",
                        AdTitle = '" + adModel.AdTitle + @"',
                        AdInformation = '" + adModel.AdInformation + @"',
                        AdType = '" + adModel.AdType + @"',
                        AdCategory = '" + adModel.AdCategory + @"',
                        Approve = '" + adModel.Approve + @"'
                        Where AdId = " + adModel.AdId + @"
                        ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["AngularProject"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return Ok();
            }
            catch (Exception)
            {
                return Ok();
            }

        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                string query = @"
                        Delete from dbo.Ad
                        Where AdId =" + id + @"
                        ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["AngularProject"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return Ok();
            }
            catch (Exception)
            {
                return Ok();
            }

        }
    }
}
