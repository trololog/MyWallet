using System;

namespace MyWalletApi.Data.Interface.Model
{
    public interface ITransaction:IBaseModel
    {
        string TransactionType { get; set; }
        string CategoryDescription { get; set; }
        decimal Amount { get; set; }
        string Concept { get; set; }
        DateTime Date { get; set; }
    }
}