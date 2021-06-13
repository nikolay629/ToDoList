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
    public class LikeAdController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select *
                    from dbo.LikeAd
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
                    select * from dbo.LikeAd
                    Where " + colum + @" = " + id +@"
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

        public IHttpActionResult Post(LikeAdModel likeAd)
        {
            try
            {
                string query = @"
                        Insert into dbo.LikeAd(AdId, ClientId)
                        Values(" + likeAd.AdId + @",
                                " + likeAd.ClientId + @")
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
                return Ok(); ;
            }
            catch (Exception)
            {
                return Ok();
            }

        }

        public IHttpActionResult Put(LikeAdModel likeAd)
        {
            try
            {
                string query = @"
                        Update dbo.LikeAd
                        Set 
                        AdId = " + likeAd.AdId + @",
                        ClientId = " + likeAd.ClientId + @",
                        Where LikeAdId = " + likeAd.LikeAdId + @"
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

        public IHttpActionResult Delete(string colum,int id)
        {
            try
            {
                string query = @"
                        Delete from dbo.LikeAd
                        Where " + colum + @" =" + id + @"
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
