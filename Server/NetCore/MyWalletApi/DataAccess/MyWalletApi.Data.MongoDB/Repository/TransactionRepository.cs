using MyWalletApi.Data.Interface.Model;
using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Settings;
using MyWalletApi.Data.MongoDB.DTO;
using MongoDB.Driver;

namespace MyWalletApi.Data.MongoDB.Repository 
{
    public class TransactionRepository: MongoDBRepository<ITransaction>, ITransactionRepository
    {
        public TransactionRepository(IMyWalletDatabaseSettings settings): base(settings)
        {
            _collection = (IMongoCollection<ITransaction>)_database.GetCollection<TransactionDTO>("Transaction");
        }
    }
}