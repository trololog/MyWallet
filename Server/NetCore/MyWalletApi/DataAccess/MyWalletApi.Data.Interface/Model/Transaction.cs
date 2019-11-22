using System;

namespace MyWalletApi.Data.Interface.Model
{
    public class Transaction: BaseModel, ITransaction
    {
        public string TransactionType { get; set; }
        public string CategoryDescription { get; set; }
        public decimal Amount { get; set; }
        public string Concept { get; set; }
        public DateTime Date { get; set; }
    }
}