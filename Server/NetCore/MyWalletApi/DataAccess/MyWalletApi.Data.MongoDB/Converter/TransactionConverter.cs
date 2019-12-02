using MyWalletApi.Data.MongoDB.DTO;
using MyWalletApi.Model.Interface;

namespace MyWalletApi.Data.MongoDB.Converter
{
    public class TransactionConverter
    {
        public TransactionDTO Convert(ITransaction model) 
        {
            return new TransactionDTO {
                Amount = model.Amount,
                CategoryDescription = model.CategoryDescription,
                Concept = model.Concept,
                Date = model.Date,
                Id = model.Id,
                TransactionType = model.TransactionType
            };
        }
    }
}