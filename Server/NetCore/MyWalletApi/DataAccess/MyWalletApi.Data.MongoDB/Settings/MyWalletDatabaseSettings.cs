namespace MyWalletApi.Data.MongoDB.Settings
{
    public class MyWalletDatabaseSettings : IMyWalletDatabaseSettings
    {
        public string TransactionsCollectionName { get ; set ; }
        public string ConnectionString { get ; set ; }
        public string DatabaseName { get ; set ; }
    }
}