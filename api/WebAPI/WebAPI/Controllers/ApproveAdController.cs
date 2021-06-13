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
    public class ApproveAdController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select *
                    from dbo.ApproveAd
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
        [Route("api/ApproveAd/GetWithCompanyId")]
        [HttpGet]
        public HttpResponseMessage GetWithCompanyId(int id)
        {
            string query = @"
                    select ap.ApproveAdId, ap.ClientId, cl.ClientName, ad.AdId, c.CompanyName, ad.CompanyId,
                           ad.AdTitle, ad.AdType, ad.AdCategory, ad.AdInformation, ad.Approve from dbo.ApproveAd ap
                    Inner join Clients cl On
                    ap.ClientId = cl.ClientId
                    Inner join Ad ad On
                    ad.AdId = ap.AdId
                    Inner join Companies c On
                    ad.CompanyId = c.CompanyId
                    Where c.CompanyId = " + id + @"
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

        [Route("api/ApproveAd/GetWithClientId")]
        [HttpGet]
        public HttpResponseMessage GetWithClientId(int id)
        {
            string query = @"
                    select ap.ApproveAdId, ap.ClientId, ad.AdId, c.CompanyName, ad.CompanyId,
                           ad.AdTitle, ad.AdType, ad.AdCategory, ad.AdInformation, ad.Approve from dbo.ApproveAd ap
                    Inner join Ad ad On
                    ad.AdId = ap.AdId
                    Inner join Companies c On
                    ad.CompanyId = c.CompanyId
                    Where ap.ClientId = " + id + @"
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

        public IHttpActionResult Post(ApproveAdModel approveAd)
        {
            try
            {
                string query = @"
                        Insert into dbo.ApproveAd(AdId, ClientId)
                        Values(" + approveAd.AdId + @",
                                " + approveAd.ClientId + @")
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

        public IHttpActionResult Put(ApproveAdModel approveAd)
        {
            try
            {
                string query = @"
                        Update dbo.ApproveAd
                        Set 
                        AdId = " + approveAd.AdId + @",
                        ClientId = " + approveAd.ClientId + @",
                        Where ApproveId = " + approveAd.ApproveAdId + @"
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
                        Delete from dbo.ApproveAd
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
