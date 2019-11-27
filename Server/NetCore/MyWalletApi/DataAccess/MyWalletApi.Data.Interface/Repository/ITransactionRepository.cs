using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using System;

namespace MyWalletApi.Data.Interface.Repository 
{
    public interface ITransactionRepository<T> where T: ITransaction
    {
        IEnumerable<ITransaction> GetAll();
        IEnumerable<ITransaction> Find(Func<ITransaction, bool> predicate);
        ITransaction GetById(int id);
        ITransaction GetById(string id);
        void Add(ITransaction entity);
        void Update(ITransaction entity);
        void Delete(int id);
        void Delete(string id);
    }
}