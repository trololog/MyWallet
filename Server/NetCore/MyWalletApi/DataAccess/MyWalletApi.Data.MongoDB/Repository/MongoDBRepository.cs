using System;
using System.Collections.Generic;
using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Settings;
using MongoDB.Driver;
using MyWalletApi.Model.Interface;
using System.Linq;

namespace MyWalletApi.Data.MongoDB
{
    public class MongoDBRepository<T> : IRepository<T> where T: IBaseModel
    {
        protected IMongoDatabase _database;
        protected IMongoCollection<T> _collection;
        public MongoDBRepository(IMyWalletDatabaseSettings settings) 
        {
            var client = new MongoClient(settings.ConnectionString);
            _database = client.GetDatabase(settings.DatabaseName);
        }
        public void Add(T entity)
        {
            _collection.InsertOne(entity);
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            _collection.DeleteOne(e => e.Id == id);
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return _collection.AsQueryable().Where(predicate);
        }

        public IEnumerable<T> GetAll()
        {
            return _collection.Find(e => true).ToList();
        }

        public T GetById(int id)
        {
            throw new NotImplementedException();
        }

        public T GetById(string id)
        {
            return _collection.Find<T>(e=> e.Id == id).FirstOrDefault();
        }

        public void Update(T entity)
        {
            _collection.ReplaceOne(e => e.Id == entity.Id, entity);
        }
    }
}