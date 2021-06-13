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
    public class CompanyController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select CompanyId, CompanyName, CompanyEmail,
                            CompanyAddress, CompanyPassword 
                    from dbo.Companies
                    ";
            DataTable table = new DataTable();
            using(var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AngularProject"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [Route("api/Company/GetName")]
        [HttpGet]
        public HttpResponseMessage GetName()
        {
            string query = @"
                    select CompanyId, CompanyName from dbo.Companies
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

        [Route("api/Company/GetCompanyAccount")]
        [HttpGet]
        public HttpResponseMessage GetCompanyAccount(int id)
        {
            string query = @"
                    select * from dbo.Companies
                    Where CompanyId = " + id + @"
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

        [Route("api/Company/GetCompanyAccount")]
        [HttpGet]
        public HttpResponseMessage GetCompanyAccount()
        {
            string query = @"
                    select CompanyEmail, CompanyPassword from dbo.Companies
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
        public IHttpActionResult Post(CompaniesModel companiesModel)
        { 
            try
            {
                string query = @"
                        Insert into dbo.Companies(CompanyName, CompanyEmail,CompanyAddress, CompanyPassword)
                        Values('"+companiesModel.CompanyName+ @"',
                                '"+companiesModel.CompanyEmail+ @"',
                                '"+companiesModel.CompanyAddress+ @"',
                                '"+companiesModel.CompanyPassword+ @"')
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

        public IHttpActionResult Put(CompaniesModel companiesModel)
        {
            try
            {
                string query = @"
                        Update dbo.Companies
                        Set 
                        CompanyName = '" + companiesModel.CompanyName + @"',
                        CompanyEmail = '" + companiesModel.CompanyEmail + @"',
                        CompanyAddress = '" + companiesModel.CompanyAddress + @"',
                        CompanyPassword = '" + companiesModel.CompanyPassword + @"'
                        Where CompanyId = "+companiesModel.CompanyId+ @"
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
                        Delete from dbo.Companies
                        Where CompanyId ="+ id +@"
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
