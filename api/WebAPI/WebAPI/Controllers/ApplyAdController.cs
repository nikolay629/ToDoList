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
    
    public class ApplyAdController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from dbo.ApplyAd
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

        [Route("api/ApplyAd/GetWithClientId")]
        public HttpResponseMessage GetWithClientId(int id)
        {
            string query = @"
                    select ap.ApplyAdId, ap.AdId, ad.CompanyId, ad.AdTitle, ad.AdType, ad.AdCategory,
                    ad.AdInformation, ad.Approve from dbo.ApplyAd ap
                    Inner join Ad ad ON
                    ap.AdId = ad.AdId
                    Where ClientId = " + id +@"
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

        [Route("api/ApplyAd/GetWithCompanyId")]
        public HttpResponseMessage GetWithCompanyId(int id)
        {
            string query = @"
                    select ap.ApplyAdId, ap.AdId, c.ClientId, c.ClientName, ad.CompanyId, ad.AdTitle, ad.AdType, ad.AdCategory, ad.Approve
                    from dbo.ApplyAd ap
                    Inner join Clients c ON ap.ClientId = c.ClientId
                    Inner join Ad ad ON ap.AdId = ad.AdId
                    Where ad.CompanyId = " + id + @"
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

        public IHttpActionResult Post(ApplyAdModel applyAdModel)
        {
            try
            {
                string query = @"
                        Insert into dbo.ApplyAd(AdId, ClientId)
                        Values(" + applyAdModel.AdId + @",
                                " + applyAdModel.ClientId + @")
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

        public IHttpActionResult Put(ApplyAdModel applyAdModel)
        {
            try
            {
                string query = @"
                        Update dbo.ApplyAd
                        Set 
                        AdId = " + applyAdModel.AdId + @",
                        ClientId = " + applyAdModel.ClientId + @"
                        Where ApplyAdId = " + applyAdModel.ApplyAdId + @"
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

        public IHttpActionResult Delete(string colum, int id)
        {
            try
            {
                string query = @"
                        Delete from dbo.ApplyAd
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
                return  Ok();
            }

        }
    }
}
