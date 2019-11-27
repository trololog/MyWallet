using System;

namespace MyWalletApi.Model.Interface
{
    public interface IBaseModel
    {
        string Id { get; set; }
        Guid? GuidId { get; set; }
        int? IntId { get; set; }
    }
}