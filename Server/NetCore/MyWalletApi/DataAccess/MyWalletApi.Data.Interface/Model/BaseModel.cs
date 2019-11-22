using System;

namespace MyWalletApi.Data.Interface.Model
{
    public class BaseModel
    {
        public string Id { get; set; }
        public Guid? GuidId { get; set; }
        public int? IntId { get; set; }
    }
}