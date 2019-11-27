using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyWalletApi.Business.Service.Interface
{
    public interface ITransactionService
    {
        Task<IEnumerable<ITransaction>> GetTransactions();
        Balance GetAccountBalance();
    }
}