using MyWalletApi.Business.Service.Interface;
using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using MyWalletApi.Data.Interface.Repository;
using System;
using System.Linq;

namespace MyWalletApi.Business.Service
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository<ITransaction> _transactionRepository;

        public TransactionService(ITransactionRepository<ITransaction> transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public IEnumerable<ITransaction> GetTransactions()
        {
            try
            {
                return _transactionRepository.GetAll().ToList();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}