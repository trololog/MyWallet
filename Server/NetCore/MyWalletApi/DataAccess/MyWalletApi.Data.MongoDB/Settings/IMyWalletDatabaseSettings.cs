namespace MyWalletApi.Data.MongoDB.Settings
{
    public interface IMyWalletDatabaseSettings
    {
        string TransactionsCollectionName { get;set;}
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}