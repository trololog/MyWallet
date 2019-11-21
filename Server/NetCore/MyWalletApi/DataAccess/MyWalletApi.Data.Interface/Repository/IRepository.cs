using System.Collections.Generic;
using System;

namespace MyWalletApi.Data.Interface.Repository 
{
    public interface IRepository<T> where T: class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Func<T, bool> predicate);
        T GetById(int id);
        T GetById(string id);
        void Add(T entity);
        void Update(T entity);
        void Delete(int id);
        void Delete(string id);
    }
}