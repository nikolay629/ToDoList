using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ApplyAdModel
    {
        public int ApplyAdId { get; set; }

        public int AdId { get; set; }

        public AdModel Ad { get; set; }

        public int ClientId { get; set; }

        public ClientsModel ClientsModel { get; set; }
    }
}