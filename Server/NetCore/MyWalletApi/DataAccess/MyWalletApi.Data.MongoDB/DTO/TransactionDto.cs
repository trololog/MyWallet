using System;
using MyWalletApi.Data.Interface.Model;

namespace MyWalletApi.Data.MongoDB.DTO
{
    public class TransactionDTO: BaseModel, ITransaction
    {
        public string TransactionType { get; set; }
        public string CategoryDescription { get; set; }
        public decimal Amount { get; set; }
        public string Concept { get; set; }
        public DateTime Date { get; set; }
    }
}