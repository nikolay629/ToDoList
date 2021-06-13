using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class AdModel
    {
        [Key]
        public int AdId { get; set; }

        public int CompanyId { get; set; }

        public CompaniesModel CompaniesModel { get; set; }

        public string AdTitle { get; set; }

        public string AdInformation { get; set; }

        public string AdType { get; set; }

        public string AdCategory { get; set; }

        public string Approve { get; set; }

        public ICollection<ApplyAdModel> ApplyAdModels { get; set; }

        public ICollection<ApproveAdModel> ApproveAdModels { get; set; }

        public ICollection<LikeAdModel> LikeAdModels { get; set; }
    }
}