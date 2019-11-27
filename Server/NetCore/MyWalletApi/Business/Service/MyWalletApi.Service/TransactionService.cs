using MyWalletApi.Business.Service.Interface;
using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using MyWalletApi.Data.Interface.Repository;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MyWalletApi.Business.Service
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository<ITransaction> _transactionRepository;

        public TransactionService(ITransactionRepository<ITransaction> transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ITransaction>> GetTransactions()
        {
            try
            {
                var result = await _transactionRepository.GetAll();

                return result;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        public Balance GetAccountBalance()
        {
            try
            {
                var transactions = _transactionRepository.GetAll();
                var incomeList = transactions.Where(t => t.TransactionType == "Income");
                var expenseList = transactions.Where(t => t.TransactionType == "Expense");
                var totalIncome = incomeList.Sum(i => i.Amount);
                var totalExpense = incomeList.Sum(i => i.Amount);

                return new Balance 
                {
                    IncomeList = incomeList,
                    ExpenseList = expenseList,
                    NetTotal = totalIncome - totalExpense,
                    TotalExpense = totalExpense,
                    TotalIncome = totalIncome,
                    ToDate = DateTime.UtcNow
                };
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}