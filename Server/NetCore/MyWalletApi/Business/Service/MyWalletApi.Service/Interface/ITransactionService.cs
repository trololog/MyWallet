using MyWalletApi.Model.Interface;
using System.Collections.Generic;

namespace MyWalletApi.Business.Service.Interface
{
    public interface ITransactionService
    {
        IEnumerable<ITransaction> GetTransactions();
    }
}