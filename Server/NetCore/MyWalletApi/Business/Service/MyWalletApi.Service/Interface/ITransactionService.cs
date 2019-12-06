using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace MyWalletApi.Business.Service.Interface
{
    public interface ITransactionService
    {
        Task<Tuple<IEnumerable<Transaction>, long>> GetTransactions();
        Task<Balance> GetAccountBalance();
        Task<string> AddTransaction(ITransaction transaction);
        Task<string> DeleteTransaction(string id);
        Task<string> UpdateTransaction(ITransaction transaction);
    }
}