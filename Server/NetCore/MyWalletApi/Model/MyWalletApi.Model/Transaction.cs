using System;


namespace MyWalletApi.Model
{
    public class Transaction
    {
        public string Id { get; set; }
        public KvpType TransactionType { get; set; }
        public string CategoryDescription { get; set; }
        public decimal Amount { get; set; }
        public string Concept { get; set; }
        public DateTime Date { get; set; }
    }
}
