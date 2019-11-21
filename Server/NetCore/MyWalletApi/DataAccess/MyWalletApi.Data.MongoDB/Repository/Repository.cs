using System;
using System.Collections.Generic;
using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Settings;
using MongoDB.Driver.Core;

namespace MyWalletApi.Data.MongoDB
{
    public class Repository<T> : IRepository<T> where T: class
    {
        public Repository(IMyWalletDatabaseSettings settings) 
        {
            var client = new MongoClient(settings.ConnectionString);
        }
        public void Add(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public T GetById(int id)
        {
            throw new NotImplementedException();
        }

        public T GetById(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}