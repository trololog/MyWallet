namespace MyWalletApi.Business.Service.Interface
{
    public interface ITransactionService
    {
        IEnumerable<Transaction> GetTransactions();
    }
}