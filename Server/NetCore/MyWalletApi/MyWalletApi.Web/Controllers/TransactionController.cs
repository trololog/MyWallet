using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MyWalletApi.Business.Service.Interface;
using MyWalletApi.Model.Interface;
using MyWalletApi.Model;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;

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
                return StatusCode(500);

            var responseObject = new {
                transactions = result,
                count = 0
            };

            return StatusCode(200, responseObject);
        }

        [HttpGet]
        [Route("balance")]
        public async Task<IActionResult> GetAccountBalance() 
        {
           var result = await _transactionService.GetAccountBalance();

            if(result == null)
                return StatusCode(500);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddTransaction([FromBody] Transaction transaction)
        {
            var result = await _transactionService.AddTransaction(transaction);

            if(result == null)
                return StatusCode(500);
            
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateTransaction([FromBody] ITransaction transaction)
        {
            var result = await _transactionService.UpdateTransaction(transaction);

           if(result == null)
                return StatusCode(500);
            
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTransaction(string id)
        {
            var result = await _transactionService.DeleteTransaction(id);

            if(result == null)
                return StatusCode(500);
            
            return Ok();
        }
    }
}