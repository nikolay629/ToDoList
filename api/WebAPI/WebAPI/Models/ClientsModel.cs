using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ClientsModel
    {
        [Key]
        public int ClientId { get; set; }

        public string ClientName { get; set; }

        public string ClientEmail { get; set; }

        public string ClientAddress { get; set; }

        public string ClientPassword { get; set; }

        public ICollection<ApplyAdModel> ApplyAdModels { get; set; }

        public ICollection<ApproveAdModel> ApproveAdModels { get; set; }

        public ICollection<LikeAdModel> LikeAdModels { get; set; }
    }
}