using System;

namespace MyWalletApi.Data.Interface.Model
{
    public interface IBaseModel
    {
        string Id { get; set; }
        Guid? GuidId { get; set; }
        int? IntId { get; set; }
    }
}