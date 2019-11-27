using System.Collections.Generic;
using MyWalletApi.Model.Interface;
using System;

namespace MyWalletApi.Model
{
    public class Balance 
    {
        public IEnumerable<ITransaction> IncomeList { get; set; }
        public IEnumerable<ITransaction> ExpenseList { get; set; }
        public decimal TotalIncome { get; set; }
        public decimal TotalExpense { get;set; }
        public decimal NetTotal { get; set; }
        public DateTime ToDate { get; set; }
    }
}