using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Settings;
using MyWalletApi.Data.MongoDB.DTO;
using MongoDB.Driver;
using System;
using System.Linq;
using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using System.Threading.Tasks;
using MyWalletApi.Data.MongoDB.Converter;

namespace MyWalletApi.Data.MongoDB.Repository 
{
    public class TransactionRepository: ITransactionRepository<ITransaction>
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<TransactionDTO> _collection;
        private readonly TransactionConverter _transactionConverter;

        public TransactionRepository(IMyWalletDatabaseSettings settings)
        {
             var client = new MongoClient(settings.ConnectionString);
            _database = client.GetDatabase(settings.DatabaseName);
            _collection = _database.GetCollection<TransactionDTO>("Transactions");
            _transactionConverter = new TransactionConverter();
        }

        public async Task<string> Add(ITransaction entity)
        {
            var entityDTO = _transactionConverter.Convert(entity);
            await _collection.InsertOneAsync(entityDTO);
            var result = await _collection.FindAsync(e => true);
            return result.ToList().Last().Id;
        }

        public async Task<string>  Update(ITransaction entity)
        {
            var entityDTO = (TransactionDTO)entity;
            await _collection.ReplaceOneAsync(e => e.Id == entityDTO.Id, entityDTO);
            return entity.Id;
        }

        public async Task<string> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<string> Delete(string id)
        {
            await _collection.DeleteOneAsync(e => e.Id == id);
            return id;
        }

        public async Task<IEnumerable<ITransaction>> Find(Func<ITransaction, bool> predicate)
        {
            return await Task.Run(() => _collection.AsQueryable().Where(predicate));
        }

        public async Task<IEnumerable<ITransaction>> GetAll()
        {
            var result = await _collection.FindAsync(e => true);

            return result.ToList().Cast<ITransaction>();
        }

        public async Task<ITransaction> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ITransaction> GetById(string id)
        {
            return await _collection.Find<TransactionDTO>(e=> e.Id == id).FirstOrDefaultAsync();
        }
    }
}