using MyWalletApi.Model;
using MyWalletApi.Model.Interface;

namespace MyWalletApi.Business.Converter
{
    public class TransactionConverter
    {
        public Transaction Convert(ITransaction transaction) 
        {
            return new Transaction 
            {
                Amount = transaction.Amount,
                CategoryDescription = transaction.CategoryDescription,
                Concept = transaction.Concept,
                Date = transaction.Date,
                Id = transaction.Id,
                TransactionType = transaction.TransactionType
            };
        }
    }
}