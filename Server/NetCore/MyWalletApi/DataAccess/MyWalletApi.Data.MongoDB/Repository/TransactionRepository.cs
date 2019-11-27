using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Settings;
using MyWalletApi.Data.MongoDB.DTO;
using MongoDB.Driver;
using System;
using System.Linq;
using System.Collections.Generic;
using MyWalletApi.Model.Interface;

namespace MyWalletApi.Data.MongoDB.Repository 
{
    public class TransactionRepository: ITransactionRepository<ITransaction>
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<TransactionDTO> _collection;

        public TransactionRepository(IMyWalletDatabaseSettings settings)
        {
             var client = new MongoClient(settings.ConnectionString);
            _database = client.GetDatabase(settings.DatabaseName);
            _collection = _database.GetCollection<TransactionDTO>("Transactions");
        }

        public void Add(ITransaction entity)
        {
            var entityDTO = (TransactionDTO)entity;
            _collection.InsertOne(entityDTO);
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            _collection.DeleteOne(e => e.Id == id);
        }

        public IEnumerable<ITransaction> Find(Func<ITransaction, bool> predicate)
        {
            return _collection.AsQueryable().Where(predicate);
        }

        public IEnumerable<ITransaction> GetAll()
        {
            var result = _collection.Find(e => true).ToList();

            return result.Cast<ITransaction>().ToList();
        }

        public ITransaction GetById(int id)
        {
            throw new NotImplementedException();
        }

        public ITransaction GetById(string id)
        {
            return _collection.Find<TransactionDTO>(e=> e.Id == id).FirstOrDefault();
        }

        public void Update(ITransaction entity)
        {
            var entityDTO = (TransactionDTO)entity;
            _collection.ReplaceOne(e => e.Id == entityDTO.Id, entityDTO);
        }
    }
}