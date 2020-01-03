using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using System;
using System.Threading.Tasks;

namespace MyWalletApi.Data.Interface.Repository 
{
    public interface ITransactionRepository<T> where T: ITransaction
    {
        Task<IEnumerable<ITransaction>> GetAll();
        Task<long> GetCount();
        Task<IEnumerable<ITransaction>> Find(Func<ITransaction, bool> predicate);
        Task<ITransaction> GetById(int id);
        Task<ITransaction> GetById(string id);
        Task<string> Add(ITransaction entity);
        Task<string> Update(ITransaction entity);
        Task<string> Delete(int id);
        Task<string> Delete(string id);
    }
}