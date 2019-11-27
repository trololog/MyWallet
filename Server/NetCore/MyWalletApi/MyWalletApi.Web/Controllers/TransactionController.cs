using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MyWalletApi.Business.Service.Interface;
using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Threading.Tasks;

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
        public async Task<IActionResult> GetAll()
        {
            var result = await _transactionService.GetTransactions();

            if(result == null)
                return HttpStatusCode(500);

            return Ok(result);
        }

        [HttpGet]
        [Route("balance")]
        public async Task<IActionResult> GetAccountBalance() 
        {
            var result = await _transactionService.GetAccountBalance();
        }

        public 
    }
}