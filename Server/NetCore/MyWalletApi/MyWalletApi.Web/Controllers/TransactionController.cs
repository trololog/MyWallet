using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MyWalletApi.Business.Service.Interface;
using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Linq;

namespace MyWalletApi.Web
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController: ControllerBase
    {
        private readonly ITransactionService _transactionService;

        public TransactionController(ITransactionService transactionService) 
        {
             _transactionService = transactionService;
        }

        [HttpGet]
        public List<ITransaction> GetAll()
        {
            return _transactionService.GetTransactions().ToList();
        }
    }
}