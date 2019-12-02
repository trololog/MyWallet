using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyWalletApi.Business.Service.Interface
{
    public interface ITransactionService
    {
        Task<IEnumerable<ITransaction>> GetTransactions();
        Task<Balance> GetAccountBalance();
        Task<string> AddTransaction(ITransaction transaction);
        Task<string> DeleteTransaction(string id);
        Task<string> UpdateTransaction(ITransaction transaction);
    }
}