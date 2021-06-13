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
    public class ClientController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from dbo.Clients
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

        [Route("api/Client/GetClientAccount")]
        [HttpGet]
        public HttpResponseMessage GetClientAccount(int id)
        {
            string query = @"
                    select * from dbo.Clients
                    Where ClientId = " + id + @"
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


        [Route("api/Client/GetClientAccount")]
        [HttpGet]
        public HttpResponseMessage GetClientAccount()
        {
            string query = @"
                    select ClientEmail, ClientPassword from dbo.Clients
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

        public IHttpActionResult Post(ClientsModel clientsModel)
        {
            try
            {
                string query = @"
                        Insert into dbo.Clients(ClientName, ClientEmail, ClientAddress, ClientPassword)
                        Values('" + clientsModel.ClientName + @"',
                                '" + clientsModel.ClientEmail + @"',
                                '" + clientsModel.ClientAddress + @"',
                                '" + clientsModel.ClientPassword + @"')
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

        public IHttpActionResult Put(ClientsModel clientModel)
        {
            try
            {
                string query = @"
                        Update dbo.Clients
                        Set 
                        ClientName = '" + clientModel.ClientName + @"',
                        ClientEmail = '" + clientModel.ClientEmail + @"',
                        ClientAddress = '" + clientModel.ClientAddress + @"',
                        ClientPassword = '" + clientModel.ClientPassword + @"'
                        Where ClientId = " + clientModel.ClientId + @"
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
                        Delete from dbo.Clients
                        Where ClientId =" + id + @"
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
