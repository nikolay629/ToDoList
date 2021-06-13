using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class CompaniesModel
    {
        [Key]
        public int CompanyId { get; set; }

        public string CompanyName { get; set; }

        public string CompanyEmail { get; set; }

        public string CompanyAddress { get; set; }

        public string CompanyPassword { get; set; }

        public ICollection<AdModel> AdModels { get; set; }
    }
}