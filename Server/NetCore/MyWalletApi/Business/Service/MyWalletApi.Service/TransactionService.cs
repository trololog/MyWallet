using MyWalletApi.Business.Service.Interface;
using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using MyWalletApi.Data.Interface.Repository;
using System;
using System.Linq;
using System.Threading.Tasks;
using MyWalletApi.Business.Converter;

namespace MyWalletApi.Business.Service
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository<ITransaction> _transactionRepository;
        private readonly TransactionConverter _transactionConverter;

        public TransactionService(ITransactionRepository<ITransaction> transactionRepository)
        {
            _transactionRepository = transactionRepository;
            _transactionConverter = new TransactionConverter();
        }

        public async Task<Tuple<IEnumerable<Transaction>, long>> GetTransactions()
        {
            try
            {
                var result = await _transactionRepository.GetAll();
                var transactions = result.Select(_transactionConverter.Convert);
                var total = await _transactionRepository.GetCount();

                return new Tuple<IEnumerable<Transaction>, long> (transactions, total);
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        public async Task<Balance> GetAccountBalance()
        {
            try
            {
                var transactions = await _transactionRepository.GetAll();
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
                return null;
            }
        }

        public async Task<string> AddTransaction(ITransaction transaction)
        {
            try 
            {
                var result = await _transactionRepository.Add(transaction);

                return result;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        public async Task<string> UpdateTransaction(ITransaction transaction)
        {
            try 
            {
                var result = await _transactionRepository.Update(transaction);

                return result;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        public async Task<string> DeleteTransaction(string id)
        {
            try 
            {
                var result = await _transactionRepository.Delete(id);

                return result;
            }
            catch(Exception ex)
            {
                return null;
            }
        }
    }
}