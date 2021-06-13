using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ApproveAdModel
    {
        [Key]
        public int ApproveAdId { get; set; }

        public int AdId { get; set; }

        public AdModel AdModel { get; set; }

        public int ClientId { get; set; }

        public ClientsModel ClientsModel { get; set; }
    }
}