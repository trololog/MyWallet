using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyWalletApi.Data.MongoDB.DTO 
{
    public class Transaction 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string TransactionType { get; set; }
        public string CategoryDescription { get; set; }
        public decimal Amount { get; set; }
        public string Concept { get; set; }
        public DateTime Date { get; set; }
    }
}