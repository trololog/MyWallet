using System;
using MyWalletApi.Model.Interface;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyWalletApi.Data.MongoDB.DTO
{
    public class TransactionDTO: IBaseModel, ITransaction
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public Guid? GuidId { get; set; }
        public int? IntId { get; set; }
        public string TransactionType { get; set; }
        public string CategoryDescription { get; set; }
        public decimal Amount { get; set; }
        public string Concept { get; set; }
        public DateTime Date { get; set; }
    }
}